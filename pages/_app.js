import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      { }
      <nav style={{ padding: '10px', background: '#0070f3', color: '#fff', display: 'flex', justifyContent: 'center' }}>
        <Link href="/" style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}>Accueil</Link>
        <Link href="/profile" style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}>Profil</Link>
        <Link href="/auth/signin" style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}>Sign Out</Link>
      </nav>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
