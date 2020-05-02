import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import Form from './component/Form';
import Song from './component/Song';

function App() {
    const [ searchLyric, setSearchLyric ] = useState({});
    const [ lyric, setLyric ] = useState('');

    useEffect(() => {
        if(Object.keys(searchLyric).length === 0){
            return;
        }

        const callAPIs = async () => {
            const url = `https://api.lyrics.ovh/v1/${searchLyric.artist}/${searchLyric.song}`;

            const resultado = await axios(url);

            setLyric(resultado.data.lyrics);
        }

        callAPIs();

    }, [searchLyric])

    return (
        <Fragment>
            <Form setSearchLyric={setSearchLyric}/>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">                        
                    </div>
                    <div className="col-md-6">
                        <Song lyric={lyric}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
