import React, { Fragment, useState } from 'react';

import Header from './components/Header';
import Footer from "./components/Footer";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    // state
    // listado de productos
    const [sttProducts, setSttProducts] = useState([
        {
            id: 1,
            name: 'Camisa ReactJS',
            price: 40
        },
        {
            id: 2,
            name: 'Camisa .Net',
            price: 50
        },
        {
            id: 3,
            name: 'Camisa Node',
            price: 50
        },
        {
            id: 4,
            name: 'Camisa Javascript',
            price: 40
        }
    ]);

    //state carrito de compras
    const [sttShoppingCart, addProductToShoppingCart] = useState([]);

    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Header title={"Tienda Virtual"} />
            <h2>Lista de productos</h2>
            {sttProducts.map(item => (
                <Product key={item.id} 
                    product={item}
                    shoppingCart={sttShoppingCart}
                    addProduct={addProductToShoppingCart}
                    products={sttProducts}/>
            ))}
            <ShoppingCart shoppingCart={sttShoppingCart}/>
            <Footer year={year}/>
        </Fragment>
    );
}

export default App;
