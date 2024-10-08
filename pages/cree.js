import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav style={navbarStyle}>
            <img src="https://superiamo.fr/assets/img/logo.png" alt="Logo" style={logoStyle} />
            <ul style={navListStyle}>
                <li style={navItemStyle}>
                    <Link href="/" style={navLinkStyle}>Accueil</Link>
                </li>
                <li style={navItemStyle}>
                    <Link href="/profil" style={navLinkStyle}>Profil</Link>
                </li>
                <li style={navItemStyle}>
                    <Link href="/" style={navLinkStyle}>Sign Out</Link>
                </li>
            </ul>
            <img src="https://superiamo.fr/assets/img/shape-1.svg" alt="Shape" style={{ width: '30px', height: '30px' }} />
        </nav>
    );
};

const navbarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFF',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    zIndex: 1000,
};

const logoStyle = {
    height: '40px',
};

const navListStyle = {
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    marginLeft: 'auto',
    gap: '20px',
};

const navItemStyle = {
    color: '#2F80ED',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'color 0.3s, transform 0.2s',
};

const navLinkStyle = {
    color: '#2F80ED',
    textDecoration: 'none',
};

export default function Profil() {
    const { data: session, status } = useSession();
    const [userData, setUserData] = useState({
        nom: '',
        prenom: '',
        email: '',
        dateNaissance: '',
        adresse: '',
        telephone: '',
    });
    const [isValidAddress, setIsValidAddress] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    


    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (session) {
            setUserData({
                nom: session.user.name.split(' ')[1] || '',
                prenom: session.user.name.split(' ')[0] || '',
                dateNaissance: '',
                adresse: '',
                telephone: '',
                email: session.user.email || '',
            });
        }
    }, [session]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        if (name === 'adresse') {
            setIsValidAddress(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${userData.adresse}`);
            const adresseData = response.data;

            if (adresseData.features.length > 0) {
                const coord = adresseData.features[0].geometry.coordinates;
                const distanceFromParis = calculateDistance(coord[1], coord[0], 48.8566, 2.3522);

                if (distanceFromParis <= 50) {
                    setIsValidAddress(true);
                    await axios.post('/api/user', userData);
                    alert('Informations mises à jour avec succès !');

                } else {
                    setIsValidAddress(false);
                    setErrorMessage('L\'adresse doit être à moins de 50 km de Paris.');
                }
            } else {
                setIsValidAddress(false);
                setErrorMessage('Adresse non valide.');
            }
        } catch (error) {
            console.error('Erreur lors de la validation de l\'adresse:', error);
            setErrorMessage('Erreur lors de la validation de l\'adresse. Veuillez vérifier votre connexion.');
        } finally {
            setLoading(false);
        }
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    if (status === 'loading') return <p>Chargement...</p>;
    if (!session) return <p>Vous devez être connecté pour voir cette page.</p>;

    return (
        <>
            <Navbar />
            <img src="https://superiamo.fr/assets/img/shape-5.svg" alt="Shape" style={backgroundImageStyle1} />
            <img src="https://superiamo.fr/assets/img/shape-1.svg" alt="Shape" style={backgroundImageStyle2} />
            <img src="https://superiamo.fr/assets/img/shape-2.svg" alt="Shape" style={backgroundImageStyle3} />

            <div style={containerStyle}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#FFC845", fontSize: '50px' }} />
                    <h1 style={{ textAlign: 'center', color: '#2F80ED', margin: '10px 0' }}>Crée votre compte !</h1>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input type="text" name="nom" placeholder="Nom" value={userData.nom} onChange={handleInputChange} required style={inputStyle} />
                    <input type="text" name="prenom" placeholder="Prénom" value={userData.prenom} onChange={handleInputChange} required style={inputStyle} />
                    <input type="date" name="dateNaissance" value={userData.dateNaissance} onChange={handleInputChange} required style={inputStyle} />
                    <input
                        type="text"
                        name="adresse"
                        placeholder="Adresse (ex: Versailles, France)"
                        value={userData.adresse}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                    <input type="text" name="telephone" placeholder="Téléphone" value={userData.telephone} onChange={handleInputChange} required style={inputStyle} />
                    <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} required style={inputStyle} />
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            ...buttonStyle,
                            backgroundColor: isHovered ? '#FFC845' : '#2F80ED',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {loading ? 'Chargement...' : 'Crée'}
                    </button>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {isValidAddress === false && <p style={{ color: 'red' }}>Adresse non valide.</p>}
                    {isValidAddress === true && <p style={{ color: 'green' }}>Adresse valide !</p>}
                </form>
            </div>
        </>
    );
}

const containerStyle = {
    position: 'relative',
    maxWidth: '800px',
    margin: '30px auto 0',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
};

const backgroundImageStyle1 = {
    position: 'absolute',
    top: '60px',
    left: '100px',
    zIndex: 0,
};

const backgroundImageStyle2 = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    zIndex: 0,
};

const backgroundImageStyle3 = {
    position: 'absolute',
    right: '0',
    zIndex: 0,
};
