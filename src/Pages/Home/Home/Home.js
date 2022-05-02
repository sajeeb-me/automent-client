import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Statistic from '../Statistic/Statistic';
import TopSold from './TopSold/TopSold';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventoryItems />
            <Statistic />
            <TopSold />
        </div>
    );
};

export default Home;