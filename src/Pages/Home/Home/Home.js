import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Statistic from '../Statistic/Statistic';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventoryItems />
            <Statistic />
        </div>
    );
};

export default Home;