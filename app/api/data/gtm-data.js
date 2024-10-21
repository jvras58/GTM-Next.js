import * as admin from 'firebase-admin';
import connectDB from '../../../lib/dbConnect';

export default async function handler(req, res) {
if (req.method === 'POST') {
try {
    await connectDB(); // Conecta ao Firebase

    const db = admin.firestore();
    const data = req.body; // Dados recebidos do GTM
    console.log('Dados recebidos do GTM:', data);

    // Validação de dados
    if (!data.event || !data.cardName) {
    return res.status(400).json({ error: 'Dados inválidos. Certifique-se de incluir os campos event, timestamp e cardName.' });
    }

    // Salva os dados no Firestore
    await db.collection('gtm_data').add(data);

    res.status(200).json({ message: 'Dados salvos com sucesso' });
} catch (error) {
    console.error('Erro ao salvar os dados:', error);
    res.status(500).json({ error: 'Ocorreu um erro interno do servidor.' });
}
} else {
res.status(405).json({ message: 'Método HTTP não permitido' });
}
}