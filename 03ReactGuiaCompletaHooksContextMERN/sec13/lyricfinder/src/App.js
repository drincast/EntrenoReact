import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import Form from './component/Form';
import Song from './component/Song';
import InfoArtist from './component/InfoArtist';

function App() {
    const [ searchLyric, setSearchLyric ] = useState({});
    const [ lyric, setLyric ] = useState('');
    const [ infoArtist, setInfoArtist ] = useState({});

    useEffect(() => {
        if(Object.keys(searchLyric).length === 0){
            return;
        }

        const callAPIs = async () => {
            const url = `https://api.lyrics.ovh/v1/${searchLyric.artist}/${searchLyric.song}`;
            const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchLyric.artist}`;

            const [lyric, information] = await Promise.all([
                axios(url),
                axios(url2)
            ]);

            //const resultado = await axios(url);
            setLyric(lyric.data.lyrics);
            setInfoArtist(information.data.artists[0])
        }

        callAPIs();

    }, [searchLyric, infoArtist])

    return (
        <Fragment>
            <Form setSearchLyric={setSearchLyric}/>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <InfoArtist infoArtist={infoArtist} />
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
