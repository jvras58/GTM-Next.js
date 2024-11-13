import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const useAddData = (collectionName) => {
  const [data] = useState([]);
  const [loading] = useState(true);

  const addData = async (jsonData) => {
    try {
      if (Array.isArray(jsonData)) {
        for (const item of jsonData) {
          const docRef = await addDoc(collection(db, collectionName), item);
          console.log('Dados adicionados com sucesso:', docRef.id);
        }
      } else {
        const docRef = await addDoc(collection(db, collectionName), jsonData);
        console.log('Dados adicionados com sucesso:', docRef.id);
      }
    } catch (error) {
      console.error('Erro ao adicionar dados:', error);
    }
  };

  return { data, loading, addData };
};

export default useAddData;