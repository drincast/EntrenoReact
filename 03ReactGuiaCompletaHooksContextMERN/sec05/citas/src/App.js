import React, { Fragment, useState } from 'react';

import Form from "./components/Form";

function App() {
    //state para las citas
    const [lstAppointment, setLstAppointment] = useState([]);

    function createAppointment(appointment){
        console.log('createAppointment', appointment);
        setLstAppointment([
            ...lstAppointment,
            appointment
        ]);
    }

    return (
        <Fragment>
            <h1>Administrador Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form createAppointment={createAppointment}></Form>
                    </div>
                    <div className="one-half column">
                        2
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
