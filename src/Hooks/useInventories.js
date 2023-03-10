import axios from 'axios'
import { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const { data } = await axios.get('https://automent-server.vercel.app/items')
            setInventories(data)
            setIsLoading(false);
        })()
    }, [])
    return [inventories, isLoading]
};

export default useInventories;