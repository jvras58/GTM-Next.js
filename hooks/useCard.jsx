import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function useFetchData() {
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
const fetchData = async () => {
    setIsLoading(true);
    try {
    const result = await prisma.yourModel.findMany();
    setData(result);
    } catch (error) {
    setError(error);
    } finally {
    setIsLoading(false);
    }
};

fetchData();
}, []);

return { data, isLoading, error };
}

export default useFetchData;