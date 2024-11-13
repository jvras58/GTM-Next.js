import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const useFetchData = (collectionName) => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchData = async () => {
    try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Dados buscados com sucesso:', data);
    setData(data);
    } catch (error) {
    console.error('Erro ao buscar dados:', error);
    } finally {
    setLoading(false);
    }
};

fetchData();
}, [collectionName]);

return { data, loading };
};

export default useFetchData;