import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'select_account',
        },
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,


  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/profile`;
    },
    async session({ session, token, user }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
