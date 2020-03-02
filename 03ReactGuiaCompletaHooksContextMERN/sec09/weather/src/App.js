import React, { Fragment, useEffect, useState } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
    const [search, setSearch] = useState({
        city: '',
        country: ''
    });

    const [consult, setConsult] = useState(false);

    const [response, setResponse] = useState({});

    const [error, setError] = useState(false);

    const {city, country} = search;

    useEffect(() => {
        const responseAPI = async () => {
            if(consult)
            {   
                const appId = 'd1a9b148262853b748abd0a266fca3a2'
                let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

                const response = await fetch(url);
                const respJSON = await response.json();
                
                setResponse(respJSON);
                setConsult(false);

                console.log(respJSON);
                if(respJSON.cod === '404'){
                    setError(true);
                }
                else{
                    setError(false);
                }
            }
        }

        responseAPI();

        //eslint-disable-next-line
    }, [consult]);

    let component; 
    if(error){
        component = <Error message='No hay Resultados' />
    }
    else{
        component = <Weather response={response}/>
    }

    return (
        <Fragment>
            <Header title="Clima React" />

            <div className='contenedor-form'>
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Form search={search}
                                setSearch={setSearch}
                                setConsult={setConsult}/>
                        </div>
                        <div className="col m6 s12">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
