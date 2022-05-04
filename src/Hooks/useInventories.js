import axios from 'axios'
import { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://evening-waters-64317.herokuapp.com/items')
            setInventories(data)
        })()
    }, [])
    return [inventories]
};

export default useInventories;