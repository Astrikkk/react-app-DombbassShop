import { List } from 'antd';
import React, { useEffect, useState } from 'react'

const api = "https://dummyjson.com/products";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                console.log(data.products);
                //products = data.products; // does not update HTML
                setProducts(data.products); // update HTML
            });
    }, []);

    return (
        <>
            <h1>Products List</h1>

            <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={products}
                renderItem={(i) => <List.Item>{i.title} - {i.price}$ {i.description}</List.Item>}
            />
            {/* <ol>
                {products.map((i, index) =>
                    <li key={i.id}>{i.title} - {i.price}$</li>
                )}
            </ol> */}
        </>
    )
}