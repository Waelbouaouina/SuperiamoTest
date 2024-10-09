import { SessionProvider, signOut } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>Accueil</Link>
        <Link href="/profile" style={linkStyle}>Profil</Link>
        <a onClick={() => signOut()} style={linkStyle} role="button">Sign Out</a>
      </nav>

      <Component {...pageProps} />
    </SessionProvider>
  );
}

const navStyle = {
  padding: '10px',
  background: '#0070f3',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center'
};

const linkStyle = {
  margin: '10px',
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer'
};
