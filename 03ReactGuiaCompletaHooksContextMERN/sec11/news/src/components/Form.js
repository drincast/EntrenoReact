import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';
import useSelect from '../hook/useSelect';

const Form = ({ setCategory }) => {
    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ];

    const [ category, SelectNews ] = useSelect('general', OPTIONS);

    const findNews = e => {
        e.preventDefault();
        setCategory(category);
    }

    return (
        <div className={`row ${styles.searcher}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={findNews}>
                    <h2 className={styles.heading}>Encuentra noticias</h2>

                    <SelectNews />

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

Form.protoTypes = {
    setCategory: PropTypes.func.isRequired
}

export default Form;