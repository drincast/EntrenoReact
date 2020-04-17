import React, { useState, useEffect } from 'react';

import Form from './components/form';

import keyjson from './keyjson.json';

function App() {
    const [search, setSearch] = useState('');

    useEffect(() => {
        const callAPI = async () => {
            if (search === '')
                return;

            const imageXPage = 30;
            const key = keyjson['key_pixabay'];
            const url = `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&per_page=${imageXPage}`;

            const responseAPI = await fetch(url);
            const response = await responseAPI.json();

            console.log(response.hits);

        }

        callAPI();
    });

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">
                    Finder Image
                </p>
                <Form setSearch={setSearch } />
            </div>            
        </div>
    );
}

export default App;
