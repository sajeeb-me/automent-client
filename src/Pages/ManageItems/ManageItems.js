import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Allinventories from '../Allinventories/Allinventories';

const ManageItems = () => {
    const [pageCount, setPageCount] = useState(0);
    const [pageNo, setPageNo] = useState(0);

    const [inventories, setInventories] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/items?pageNo=${pageNo}`)
            setInventories(data)
        })()
    }, [pageNo])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/items/total')
            setPageCount(Math.ceil(data.total / 4))
        })()
    }, [])
    console.log(pageCount)

    return (
        <div className='py-10'>
            <h1>Manage Items: {inventories.length}</h1>
            <div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b border-slate-400 bg-slate-900">
                                        <tr>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                #
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Name
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Price
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Quantity
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Supplier
                                            </th>
                                            <th scope="col" className="text-sm px-6 py-4">
                                                Button
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        inventories.map(item => <Allinventories key={item._id} item={item} />)
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='my-5'>
                {
                    [...Array(pageCount).keys()].map(num => <button
                        key={num}
                        onClick={() => setPageNo(num)}
                        className={`px-3 py-1 border border-amber-500 rounded-md mx-1 ${num === pageNo ? 'bg-amber-500' : ''}`}
                    >
                        {num + 1}
                    </button>)
                }
            </section>
        </div>
    );
};

export default ManageItems;