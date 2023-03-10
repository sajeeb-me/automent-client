import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Allinventories from '../Allinventories/Allinventories';

const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)

    const [inventories, setInventories] = useState([])
    useEffect(() => {
        (async () => {
            const email = user?.email
            if (email) {
                try {
                    const { data } = await axios.get(`https://automent-server.vercel.app/items?email=${email}`, {
                        headers: {
                            authentication: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                    setInventories(data)
                }
                catch (error) {
                    if (error.response.status === 401 || error.response.status === 403) {
                        signOut(auth)
                        navigate('/login')
                    }
                }
            }
        })()
    }, [user?.email, navigate])

    const handleDelete = async (id) => {
        (async () => {
            await axios.delete(`https://automent-server.vercel.app/items/${id}`)
                .then(data => {
                    const confirmation = window.confirm("Are you sure to delete this Inventory?")
                    if (confirmation) {
                        // console.log(data)
                        const remaining = inventories.filter(items => items._id !== id)
                        setInventories(remaining)
                    }
                })
        })()
    }

    return (
        <div className='min-h-[90vh] pt-3 pb-10 px-4 md:px-0'>
            <p className='text-center md:text-right mr-0 md:mr-20 mb-5 md:mb-0'>
                <button onClick={() => navigate('/inventories/add')} className='bg-green-600 py-3 px-5 rounded-lg hover:bg-green-700 duration-300 ease-in-out'>Add new inventory</button>
            </p>
            <h1 className='text-2xl md:text-4xl font-bold'>My Inventories</h1>
            <p className='text-sm md:text-base mt-3 w-full md:w-1/2 mx-auto opacity-70 font-thin mb-10'>Here you can see your all inventories added by you. You can update , delete and add more inventories from here.</p>
            <div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="py-2 inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b border-slate-400 bg-slate-900">
                                        <tr>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Name
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Price
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Quantity
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4 hidden md:block">
                                                Supplier
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Button
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        inventories.map(item => <Allinventories
                                            key={item._id}
                                            item={item}
                                            handleDelete={handleDelete} />)
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItems;