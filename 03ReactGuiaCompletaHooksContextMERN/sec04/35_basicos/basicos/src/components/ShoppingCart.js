import React, { Fragment } from 'react';
import Product from './Product';

import './ShoppingCart.css';

const ShoppingCart = ({shoppingCart}) => (
    <Fragment>
        <div className="shoppingCart">
            <h2>Carrito compras</h2>
            {
                shoppingCart.length > 0 ?
                    shoppingCart.map(item => (
                        <Product 
                            key={item.id}
                            product={item}
                            shoppingCart={shoppingCart}
                        />
                    ))
                :
                <p>Uppps !! it's Empty, let go to buy, go go</p>
            }
        </div>
    </Fragment>
);

export default ShoppingCart;