
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1ra-XNkVvBV-wm00SbYdZyEpGjCZJHFw",
    authDomain: "test-3ffb9.firebaseapp.com",
    databaseURL: "https://test-3ffb9-default-rtdb.firebaseio.com",
    projectId: "test-3ffb9",
    storageBucket: "test-3ffb9.firebasestorage.app",
    messagingSenderId: "900513486175",
    appId: "1:900513486175:web:81d39ae45613b3863452ea",
    measurementId: "G-QX0WP82MM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const storage = getStorage(app);
const db = getFirestore(app);

export { db };
export { storage };


// AVISO: Não esqueça de configurar as regras de segurança no Firebase para permitir a leitura e escrita no banco de dados. 

