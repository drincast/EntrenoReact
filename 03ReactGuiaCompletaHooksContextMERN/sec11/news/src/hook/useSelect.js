import React, { useState } from 'react';

const useSelect = (initialState, options) => {
    const [state, updateState] = useState(initialState);

    const selectNews = () => (
        <select
            className='browser-default'
            value={state}
            onChange={e => updateState(e.target.value)}>
            {
                options.map(option => (
                    <option key={option.value} 
                        value={option.value } >
                        {option.label}
                    </option>
                ))
            }
        </select>
    )

    return [state, selectNews];
}

export default useSelect
