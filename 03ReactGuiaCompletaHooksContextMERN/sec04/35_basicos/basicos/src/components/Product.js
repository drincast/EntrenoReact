import React, {Fragment} from 'react';

const Product = ({product, products, shoppingCart, addProduct}) => {
    const {id, name, price } = product;

    //agregar al carro
    const addProductToCart = (name, id) => {
        const _product = products.filter(item => item.id === id)[0];
        console.log(_product);
        console.log(`agregando ${name}`);
        addProduct([
            ...shoppingCart,
            _product
        ]);
    }

    // function addProductToCart(name, id) {
    //     console.log(`agregando ${name}`);
    //     console.log(this);
    // }

    //quita del carrito
    const quitProductToCart = (id) => {
        const products = shoppingCart.filter(item => item.id !== id)
    }

    return (
        <Fragment>
            <h3>{name}</h3>
            <p>$ {price}</p>
            {
                addProduct ?
                    <button type="button"
                        onClick={() => addProductToCart(name, id) }>Agregar</button>
                :
                    <button type="button"
                        onClick={() => (".") }>Quitar</button>
            }
            
        </Fragment>
    );
}

export default Product;