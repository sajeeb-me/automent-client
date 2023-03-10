import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        (async () => {
            await axios.post('https://automent-server.vercel.app/items', data)
                .then(data => {
                    const confirmation = window.confirm("Please check all information and confirm.")
                    if (confirmation) {
                        // console.log(data)
                        toast.info('Product added successfully')
                    }
                })
        })()
    };
    return (
        <div className='min-h-[90vh] py-10 px-4 md:px-20'>
            <section className='w-full md:w-3/6 mx-auto border p-5 md:p-20 rounded-lg'>
                <h3 className='text-2xl font-bold mb-10'>Add One Inventory</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full opacity-30' value={user?.email} type="text" {...register("email")} readOnly />

                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Inventory name' type="text" {...register("name", { required: true })} />

                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Inventory price' type="number" {...register("price", { required: true })} />

                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Inventory image url' type="text" {...register("img", { required: true })} />

                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Inventory description' type="text" {...register("description", { required: true })} />

                    <div className='flex gap-5'>
                        <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Inventory quantity' type="number" {...register("quantity", { required: true })} />

                        <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Supplier name' type="text" {...register("supplier", { required: true })} />
                    </div>

                    <input className='hover:bg-cyan-500 bg-cyan-600 py-3 px-10 rounded-md w-full duration-200 ease-in-out' type="submit" value="Add Inventory" />
                </form>
            </section>
        </div>
    );
};

export default AddItems;