import React from 'react';
import useInventories from '../../../Hooks/useInventories';
import PageLoading from '../../PageLoading/PageLoading';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Statistic from '../Statistic/Statistic';
import TopSold from '../TopSold/TopSold';

const Home = () => {
    const [inventories, isLoading] = useInventories()
    if (isLoading) {
        return <PageLoading />
    }
    return (
        <div>
            <Banner />
            <InventoryItems inventories={inventories} />
            <Statistic />
            <TopSold />
        </div>
    );
};

export default Home;