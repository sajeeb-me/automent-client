import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const UpdateItems = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({})
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/items/${id}`);
            setInventory(data);
        })()
    }, [id])
    const { _id, name, img, description, price, quantity, supplier } = inventory;
    return (
        <div>
            <section>
                <article>

                </article>
            </section>
        </div>
    );
};

export default UpdateItems;