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
    async redirect({ baseUrl }) {
      return `${baseUrl}/profile`;
    },
    async session({ session, token }) {

      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },

  events: {

    signIn: async (message) => {
      console.log("User signed in", message);
    },
    error: async (message) => {
      console.log("Error occurred", message);
    },
  },

  debug: process.env.NODE_ENV === 'development',
});
