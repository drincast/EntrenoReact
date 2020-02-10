import React, { Fragment, useEffect, useState } from 'react';
import uuid from 'uuid';

const Form = () => {
    //Crear state de Citas
    const [appointment, updateAppointment] = useState({
        txtId: null,
        txtPet: '',
        txtOwner: '',
        txtDate: '',
        txtTime: '',
        txtSymptom: ''
    });

    const [error, updateError] = useState(false);

    useEffect(() => {
        console.log('en useEffect', appointment);
    }, [appointment.txtId]);

    //función que se ejecuta cuando se actualizan los campos 7777
    const updateState = (e) => {
        // let id;

        // if(e.target.name === 'txtPet' &&
        //     appointment.txtId === null){
        //     id = uuid();

        //     updateAppointment({
        //         ...appointment,
        //         [e.target.name]: e.target.value,
        //         txtId: id
        //     });
        // }
        // else{
        //     updateAppointment({
        //         ...appointment,
        //         [e.target.name]: e.target.value
        //     });
        // }

        updateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    }



    // boton agregar
    const submitAppointment = (e) => {
        e.preventDefault();

        //validar datos
        if(txtPet.trim() === '' || txtOwner.trim() === '' || txtDate.trim() === ''
            || txtTime.trim() === '' || txtSymptom.trim() === ''){
            console.log('Error');
            updateError(true);
            return;
        }

        updateError(false);

        //asignar id
        let id = uuid();

        updateAppointment({
            ...appointment,
            txtId: id
        });
        
        console.log('submitAppointment', appointment);

        

        //crear cita

        //reiniciar el form
    }

    const  { txtId, txtPet, txtOwner, txtDate, txtTime, txtSymptom } = appointment;

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {
                error ?
                <p className="alerta-error">Todos los campos son obligatorios</p>
                :
                null
            }

            <form
                onSubmit={submitAppointment}>
                <label>Nombre Mascota</label>
                <input type="text"
                    id="txtPet"
                    name="txtPet"
                    className="u-full-width"
                    placeholder="mascota"
                    onChange={updateState}
                    value={txtPet} />

                <label>Nombre Dueño</label>
                <input type="text"
                    id="txtOwner"
                    name="txtOwner"
                    className="u-full-width"
                    placeholder="propietario"
                    onChange={updateState} 
                    value={txtOwner} />

                <label>Fecha</label>
                <input type="date"
                    id="txtDate"
                    name="txtDate"
                    className="u-full-width"
                    onChange={updateState}
                    value={txtDate} />

                <label>Hora</label>
                <input type="time"
                    id="txtTime"
                    name="txtTime"
                    className="u-full-width"
                    onChange={updateState}
                    value={txtTime} />

                <label>Síntomas</label>
                <textarea className="u-full-width"
                    id="txtSymptom"
                    name="txtSymptom"
                    onChange={updateState}
                    value={txtSymptom}>
                </textarea>
                {/* <div style={{display: 'none'}}>
                    <input type="hidden"
                        id="txtId"
                        name="txtId"
                        value={txtId} />
                </div> */}

                <button type="submit" className="u-full-width button-primary">
                    Agregar cita
                </button>
            </form>
        </Fragment>
    );
}

export default Form;