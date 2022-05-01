import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        (async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('http://localhost:5000/login', { email })
                setToken(data.token)
                localStorage.setItem("accessToken", data.token)
            }
        })()
    }, [user])
    return [token]
};

export default useToken;