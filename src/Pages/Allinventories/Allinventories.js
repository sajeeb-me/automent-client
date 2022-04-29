import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Allinventories = ({ item }) => {
    const navigate = useNavigate()
    const { _id, name, img, description, price, quantity, supplier } = item;
    const [totalItems, setTotalItems] = useState('');
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/items/total')
            setTotalItems(data.items)
        })()
    }, [])
    return (
        <tbody>
            <tr className="border-b border-slate-400 transition duration-300 ease-in-out hover:bg-slate-900">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    1
                </td>
                <td className="text-sm font-light py-4 whitespace-nowrap">
                    {name}
                </td>
                <td className="text-sm font-light py-4 whitespace-nowrap">
                    {price}
                </td>
                <td className="text-sm font-light py-4 whitespace-nowrap">
                    {quantity}
                </td>
                <td className="text-sm font-light py-4 whitespace-nowrap">
                    {supplier}
                </td>
                <td className="text-sm font-light py-4 whitespace-nowrap">
                    <button onClick={() => navigate(`/inventories/${_id}`)} className='mr-2 text-amber-500 opacity-50 hover:opacity-100 duration-300 ease-in-out'>Update</button>
                    <button className='hover:bg-red-500 hover:text-white border border-red-500 py-1 px-3 rounded-md duration-200 ease-in-out text-red-500'>Delete</button>
                </td>
            </tr>
        </tbody>
    );
};

export default Allinventories;