import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}><Link href="/">Accueil</Link></li>
        <li style={navItemStyle}><Link href="/profile">Profil</Link></li>
        <li style={navItemStyle}><Link href="/api/auth/signout">Signout</Link></li>
      </ul>
    </nav>
  );
}

const navbarStyle = {
  backgroundColor: '#2F80ED',
  padding: '10px',
  position: 'relative',
};

const navListStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '20px',
};

const navItemStyle = {
  color: '#fff',
  cursor: 'pointer',
};
