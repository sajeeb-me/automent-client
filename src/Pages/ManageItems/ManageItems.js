import React from 'react';
import useInventories from '../../Hooks/useInventories';
import Allinventories from '../Allinventories/Allinventories';

const ManageItems = () => {
    const [inventories] = useInventories()
    return (
        <div>
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

        </div>
    );
};

export default ManageItems;