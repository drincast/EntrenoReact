import React, { useState } from 'react';
import Error from "./Error";
import PropTypes from 'prop-types';

import styles from './Form.module.css';

const Form = ({ }) => {
    return (
        <div className={`row ${styles.searcher}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={console.log('hola')}>
                    <h2 className={styles.heading}>Encuentra noticias</h2>

                    <div className={`input-field col s12`}>
                        <input type="submit" 
                            className={`btn-large amber darken-2 ${styles.btn_block}`} 
                            value="Buscar"/>
                    </div>
                </form>
            </div>    
        </div>
        
    );
}

// Form.protoTypes = {
//     search: PropTypes.object.isRequired,
//     setSearch: PropTypes.func.isRequired,
//     setConsult: PropTypes.func.isRequired
// }

export default Form;