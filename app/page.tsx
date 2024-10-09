"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link"; // Importer Link de next/link

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      position: 'relative',
    }}>

      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <Image
          src="https://superiamo.fr/assets/img/logo.png"
          alt="Superiamo Logo"
          width={150}
          height={50}
        />
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
        padding: '50px',
        textAlign: 'center',
        width: '50%',
        maxWidth: '600px',
        position: 'relative',
      }}>

        <Image
          src="https://superiamo.fr/assets/img/shape-3.svg"
          alt="Decorative Shape"
          width={50}
          height={50}
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            opacity: 0.8
          }}
        />

        <h1 style={{
          color: '#333',
          marginBottom: '20px',
          fontSize: '36px',
          fontWeight: '700',
          position: 'relative',
        }}>
          Bienvenue chez Superiamo
        </h1>

        <Image
          src="https://superiamo.fr/assets/img/shape-2.svg"
          alt="Decorative Shape"
          width={50}
          height={50}
          style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            opacity: 0.8
          }}
        />

        <p style={{
          marginBottom: '30px',
          color: '#555',
          fontSize: '18px'
        }}>
          Superiamo, la plateforme qui vous permet de gérer votre compte facilement et en toute sécurité.
          Connectez-vous pour accéder à vos fonctionnalités.
        </p>

        <button
          onClick={() => signIn("google")}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 30px',
            backgroundColor: '#4285F4',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'background-color 0.3s, transform 0.3s',
            outline: 'none',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            margin: '10px auto',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#357ae8';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4285F4';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Image
            src="https://image.similarpng.com/very-thumbnail/2021/09/Logo-Search-Google--on-transparent-background-PNG.png"
            alt="Google"
            width={20}
            height={20}
            style={{
              marginRight: '8px',
              backgroundColor: 'white',
              borderRadius: '50%'
            }}
          />
          Se connecter avec Google
        </button>

        <p style={{ color: '#555', marginTop: '20px', fontSize: '16px' }}>
          Vous n'avez pas de compte ? <Link href="/cree" style={{ color: '#4285F4', textDecoration: 'underline' }}>Inscrivez-vous ici</Link>
        </p>

        <p style={{ color: '#888', marginTop: '20px', fontSize: '14px' }}>© {new Date().getFullYear()} Superiamo. Tous droits réservés.</p>
      </div>

      <div style={{ marginLeft: '40px', position: 'relative' }}>
        <Image
          src="https://superiamo.fr/assets/img/img-1.png"
          alt="Accueil Image"
          width={430}
          height={300}
          style={{
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'transparent'
          }}
        />
        <Image
          src="https://superiamo.fr/assets/img/shape-5.svg"
          alt="Decorative Shape"
          width={70}
          height={70}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.7,
          }}
        />
      </div>

      <Image
        src="https://superiamo.fr/assets/img/shape-8.svg"
        alt="Additional Decorative Shape"
        width={80}
        height={80}
        style={{
          position: 'absolute',
          bottom: '40%',
          left: '55%',
          opacity: 0.8,
          transform: 'rotate(20deg)',
        }}
      />

      <Image
        src="https://superiamo.fr/assets/img/shape-1.svg"
        alt="Additional Decorative Shape"
        width={100}
        height={100}
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          bottom: '0',
          transform: 'translateX(-50%)',
          opacity: 0.8,
        }}
      />
      <Image
        src="https://superiamo.fr/assets/img/shape-2.svg"
        alt="Decorative Shape Bottom"
        width={100}
        height={100}
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '0',
          transform: 'translateX(-500%)',
          opacity: 0.8,
        }}
      />
    </div>
  );
}
