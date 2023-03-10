import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

const UpdateItems = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [inventory, setInventory] = useState({})
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://automent-server.vercel.app/items/${id}`);
            setInventory(data);
        })()
    }, [inventory, id])
    const { _id, name, img, description, price, quantity, supplier } = inventory;

    // Delivered Button
    const handleDelivered = async () => {
        const { _id, quantity, ...rest } = inventory;
        const newQuantity = parseInt(quantity) - 1;
        const newInventory = { quantity: newQuantity, ...rest };
        const { data } = await axios.put(`https://automent-server.vercel.app/items/${id}`, newInventory)
        setInventory(data);
        toast.info(`${name} delivered`)
    }

    // add items
    const handleAddItem = async (e) => {
        e.preventDefault()
        const number = parseInt(e.target.number.value);
        const { _id, quantity, ...rest } = inventory;
        const newQuantity = parseInt(quantity) + number;
        const newInventory = { quantity: newQuantity, ...rest };
        const { data } = await axios.put(`https://automent-server.vercel.app/items/${id}`, newInventory)
        setInventory(data);
        // console.log(data)
        toast.success(`${number} products added successfully.`)
    }

    return (
        <div className='px-4 md:px-20'>
            <section className='py-10 grid grid-cols-1 md:grid-cols-3'>
                {/* item details */}
                <article className='col-span-2'>
                    {/* photo */}
                    <div className='p-5'>
                        <div className="rounded-xl relative overflow-hidden bg-no-repeat bg-cover hover:cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="black">
                            <img className='w-full rounded-xl hover:scale-110 transition duration-300 ease-in-out' src={img} alt="" />
                        </div>
                    </div>
                    {/* details */}
                    <div className='px-4 pb-4'>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                            <div className='text-left'>
                                <h3 className='text-3xl font-semibold'>{name}</h3>
                                <p className='text-xs font-thin opacity-50'>id#{_id}</p>
                            </div>
                            {/* deliverd button */}
                            {
                                quantity === 0 ?
                                    <button onClick={handleDelivered} className={`bg-cyan-500 border border-cyan-500 py-2 px-8 rounded-md cursor-not-allowed opacity-20`} disabled>Delivered</button>
                                    :
                                    <button onClick={handleDelivered} className={`hover:bg-cyan-500 border border-cyan-500 py-2 px-8 rounded-md duration-200 ease-in-out`}>Delivered</button>
                            }
                        </div>
                        <hr className='my-3 opacity-20' />
                        <div className='text-left'>
                            <h3 className='text-3xl font-bold text-cyan-600'>${price?.toLocaleString("en-US")}/-</h3>
                            <p className='font-thin mt-2 opacity-70'>{description}</p>
                        </div>
                        <hr className='my-3 opacity-20' />
                        <div className='flex justify-between font-thin'>
                            {quantity === 0 ? <p className='text-red-500'>Stock Out</p> : <p>Quantity : {quantity}</p>}
                            <p>Supplier : {supplier}</p>
                        </div>
                        <hr className='my-3 opacity-20' />
                        <button onClick={() => navigate('/inventories/manage')} className='hover:bg-cyan-500 bg-cyan-600 py-3 px-10 rounded-md duration-200 ease-in-out'>Manage Inventories</button>
                    </div>
                </article>
                {/* Add Items */}
                <article className='p-5 '>
                    <div className='bg-cyan-500 text-slate-800 rounded-xl p-5 sticky-top top-20 -z-0'>
                        <h1 className='text-xl font-semibold'>Add Quantity</h1>
                        <form onSubmit={handleAddItem} className='mt-10 mb-3'>
                            <input className='block w-full bg-transparent border-b border-slate-800 text-slate-800 outline-none placeholder:text-slate-800 ' type="number" name='number' placeholder='Add number' required />
                            <input className='hover:bg-white border hover:text-cyan-500 text-white py-2 px-6 mt-8 rounded-md font-semibold duration-200 ease-in-out' type="submit" value="Add Item" />
                        </form>
                    </div>
                </article>
            </section>
        </div >
    );
};

export default UpdateItems;