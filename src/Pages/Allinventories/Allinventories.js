import React from 'react';
import { useNavigate } from 'react-router-dom';

const Allinventories = ({ item, handleDelete }) => {
    const { _id, name, img, description, price, quantity, supplier } = item;
    const navigate = useNavigate()


    return (
        <tbody>
            <tr className="border-b border-slate-400 transition duration-300 ease-in-out hover:bg-slate-900">
                <td className="text-sm font-light py-4 whitespace-nowrap">
                    {name}
                </td>
                <td className="text-sm font-light py-4 whitespace-nowrap">
                    {price}
                </td>
                <td className="text-sm font-light py-4 whitespace-nowrap">
                    {quantity === 0 ? <p className='text-red-500'>Stock Out</p> : <p>{quantity}</p>}
                </td>
                <td className="text-sm font-light py-4 whitespace-nowrap hidden md:inline-block">
                    {supplier}
                </td>
                <td className=" text-sm font-light py-4 whitespace-nowrap">
                    <button onClick={() => navigate(`/inventories/${_id}`)} className='mr-2 text-amber-500 opacity-50 hover:opacity-100 duration-300 ease-in-out hidden md:inline-block'>Update</button>
                    <button onClick={() => handleDelete(_id)} className='hover:bg-red-500 hover:text-white border border-red-500 py-1 px-3 rounded-md duration-200 ease-in-out text-red-500'>Delete</button>
                </td>
            </tr>
        </tbody>
    );
};

export default Allinventories;