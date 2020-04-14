import React, { Fragment, useState, useEffect } from 'react';

import Form from './components/Form';
import Header from './components/Header';
import ListNews from './components/ListNews';

function App() {
    const [category, setCategory] = useState('');
    const [news, setNews] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=8fd22950acd1428a833d002860ba52b5`;

            const response = await fetch(url);
            const news = await response.json();
            console.log(news.articles);
            if(news !== [])
                setNews(news.articles);
        }

        callAPI();
    }, [category])

    return (
        <Fragment>
            <Header title='Noticias' />

            <div className="container white">
                <Form setCategory={setCategory} />

                <ListNews lstNews={news} />
            </div>
        </Fragment>
    );
}

export default App;
