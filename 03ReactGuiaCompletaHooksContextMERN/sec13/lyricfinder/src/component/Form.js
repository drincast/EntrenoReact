import React, { useState } from 'react';

import Error from './Error';

const Form = ({ setSearchLyric }) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const { artist, song } = search;

    const [error, setError] = useState('');    

    const updateState = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const searchInformation = (e) => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === ''){
            setError("Falta el artista o el nombre de la canción");
            return;
        }

        setError('');

        setSearchLyric(search);        
    } 

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    {
                        error !== '' ?
                            <Error msg={error} />
                        :
                            null
                    }
                    <form onSubmit={searchInformation}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">
                                Lyric Finder !!!...
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input type="text" 
                                            className="form-control"
                                            id="artist"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={updateState}
                                            value={artist}                                            
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <   div className="form-group">
                                        <label htmlFor="">Canción</label>
                                        <input type="text" 
                                            className="form-control"
                                            id="song"
                                            name="song"
                                            placeholder="Nombre Artista"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button type="submit"
                                className="btn btn-primary float-right">Buscar</button>
                        </fieldset>

                        {
                            error ?
                                <Error msg='Agrega una palabra de busqueda' />
                                :
                                null
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Form;