import React, { Fragment, useEffect, useState } from 'react';

import Appointment from "./components/Appointment";
import Form from "./components/Form";

function App() {
    //localstorage
    let initialAppointments = JSON.parse(localStorage.getItem('lstAppointments'));

    if(!initialAppointments){
        initialAppointments = [];
    }


    //state para las citas
    const [lstAppointment, setLstAppointment] = useState(initialAppointments);

    useEffect(() => {        
        if(initialAppointments){
            localStorage.setItem('lstAppointments', JSON.stringify(lstAppointment));
        }
        else{
            localStorage.setItem('lstAppointments', JSON.stringify([]));
        }
    }, [lstAppointment, initialAppointments]);

    //agrega una cita a la lista de citas creadas
    function CreateAppointment(appointment){
        console.log('createAppointment', appointment);
        setLstAppointment([
            ...lstAppointment,
            appointment
        ]);
    }

    //elimina una cita de la lista de citas creadas
    const deleteAppointment = (id) => {
        const lstAppointmentNew = lstAppointment.filter(item => item.txtId !== id);
        setLstAppointment(lstAppointmentNew);
    }

    const titulo = lstAppointment.length > 0 ? 'Administra tus Citas' : 'No hay citas';

    return (
        <Fragment>
            <h1>Administrador Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form createAppointment={CreateAppointment}></Form>
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        {
                            lstAppointment.map(item => (
                                <Appointment key={item.txtId}
                                    appointment={item}
                                    deleteAppointment={deleteAppointment}>
                                </Appointment>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
