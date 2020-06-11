import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return(
        <header className='bg-alert'>
            <h1>Recetas de Bebidas</h1>
        </header>
    );
}

Header.protoTypes = {
    title: PropTypes.string.isRequired
}

export default Header;