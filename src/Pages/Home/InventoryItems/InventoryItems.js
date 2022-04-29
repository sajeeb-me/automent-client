import React from 'react';
import useInventories from '../../../Hooks/useInventories';
import Inventory from '../Inventory/Inventory';

const InventoryItems = () => {
    const [inventories] = useInventories()
    return (
        <div className='py-10'>
            <section>
                <h1 className='text-2xl md:text-4xl font-bold'>Your Inventories: {inventories.length}</h1>
                <div>
                    {
                        inventories.map(item => <Inventory key={item._id} item={item} />)
                    }
                </div>
            </section>
        </div>
    );
};

export default InventoryItems;