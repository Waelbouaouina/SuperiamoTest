import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (req.method === 'GET') {
        res.status(200).json({ name: session.user.name || 'Nom fictif', email: session.user.email || 'email@exemple.com' });
    }
    else if (req.method === 'POST') {
        const { nom, prenom, dateNaissance, adresse, telephone } = req.body;

        if (!nom || !prenom || !dateNaissance || !adresse || !telephone) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        return res.status(200).json({ message: 'Informations mises à jour' });
    }
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
