import React, { useState, useEffect } from 'react';

import Form from './components/form';
import ImageList from './components/ImageList';

import keyjson from './keyjson.json';

function App() {
    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        const callAPI = async () => {
            if (search === '')
                return;

            const imageXPage = 10;
            const key = keyjson['key_pixabay'];
            const url = `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&per_page=${imageXPage}&page=${currentPage}`;

            const responseAPI = await fetch(url);
            const response = await responseAPI.json();

            console.log(response.hits);

            setImages(response.hits);

            const totalPage = Math.ceil(response.totalHits / imageXPage);
            setTotalPage(totalPage);

            const jumbotron = document.querySelector('.jumbotron');
            jumbotron.scrollIntoView({
                behavior: 'smooth'
            })
        }

        callAPI();
        //setSearch('');
    },  [search, currentPage]);

    const PreviousPage = () => {
        const newCurrentPage = currentPage - 1;

        if(newCurrentPage <= 0){
            return;
        }

        setCurrentPage(newCurrentPage);
    }

    const NextPage = () => {
        const newCurrentPage = currentPage + 1;

        if(newCurrentPage >= totalPage){
            return;
        }

        setCurrentPage(newCurrentPage);
    }
    
    console.log('currentPage', currentPage);
    return (        
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">
                    Finder Image
                </p>
                <Form setSearch={setSearch } />
            </div>
            
            <div className="row justify-comtent-center">
                <ImageList images={images} />

                {
                    (currentPage === 1) ?
                        null
                    :
                        <button className="bbtn btn-info mr-1"
                            onClick={PreviousPage}>&laquo; Anterior</button>
                }

                {
                    (currentPage === totalPage) ?
                        null
                    :
                        <button className="bbtn btn-info mr-1"
                            onClick={NextPage}>Siguiente &raquo;</button>
                }
            </div>
        </div>
    );
}

export default App;
