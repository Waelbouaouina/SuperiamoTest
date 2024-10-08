import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
        padding: '40px',
        textAlign: 'center',
        width: '90%',
        maxWidth: '400px'
      }}>
        <h1 style={{ color: '#333', marginBottom: '10px', fontSize: '28px', fontWeight: '600' }}>Connexion</h1>
        <p style={{ marginBottom: '30px', color: '#555', fontSize: '16px' }}>Connectez-vous à votre compte pour continuer.</p>
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
            margin: '10px auto'
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
          <img src="https://image.similarpng.com/very-thumbnail/2021/09/Logo-Search-Google--on-transparent-background-PNG.png" alt="Google" style={{ width: '20px', marginRight: '8px' }} /> { }
          Se connecter avec Google
        </button>
        <p style={{ color: '#888', marginTop: '20px', fontSize: '14px' }}>© {new Date().getFullYear()} Superiamo. Tous droits réservés.</p>
      </div>
    </div>
  );
}
