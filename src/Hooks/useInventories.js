import axios from 'axios'
import { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/items')
            // console.log(data)
            setInventories(data)
        })()
    }, [])
    return [inventories]
};

export default useInventories;