import * as admin from 'firebase-admin';
import path from 'path';

const serviceAccountPath = path.resolve(__dirname, 'serviceAccountKey.json');
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export default async function connectDB() {
try {
    await db.settings({ timestampsInSnapshots: true });
    console.log('Conectado ao Firebase');
} catch (error) {
    console.error('Erro ao conectar ao Firebase:', error);
    throw error;    
}
}