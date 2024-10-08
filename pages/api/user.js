import { getSession } from 'next-auth/react';

export default async function handler(req, res) {

    if (req.method === 'GET') {
        res.status(200).json({ name: 'Nom fictif', email: 'email@exemple.com' });
    } else if (req.method === 'POST') {
        const { nom, prenom, dateNaissance, adresse, telephone } = req.body;
        return res.status(200).json({ message: 'Informations mises à jour' });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
