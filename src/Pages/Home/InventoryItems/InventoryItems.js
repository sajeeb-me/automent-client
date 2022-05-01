import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../Hooks/useInventories';
import Inventory from '../Inventory/Inventory';

const InventoryItems = () => {
    const navigate = useNavigate();
    const [inventories] = useInventories()
    return (
        <div className='mt-10 py-10 px-4 md:px-20'>
            <section>
                <h1 className='text-2xl md:text-5xl font-bold'>Your Inventories</h1>
                <p className='mt-3 w-full md:w-1/2 mx-auto opacity-70 font-thin'>Your inventories, you can have a look below. If you want to update any Item, please click Update button.</p>
                <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        inventories.slice(0, 6).map(item => <Inventory key={item._id} item={item} />)
                    }
                </div>
                <button onClick={() => navigate('/inventories/manage')} className='hover:bg-cyan-500 bg-cyan-600 py-3 px-10 rounded-md duration-200 ease-in-out'>Manage Inventories</button>
            </section>
        </div >
    );
};

export default InventoryItems;