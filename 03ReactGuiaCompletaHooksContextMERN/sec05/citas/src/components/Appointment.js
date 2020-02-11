import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => {    
    return (
        <Fragment>
            <div className="cita">
                <p>Mascota: <span>{appointment.txtPet}</span></p>
                <p>Dueño: <span>{appointment.txtOwner}</span></p>
                <p>Fecha: <span>{appointment.txtDate}</span></p>
                <p>Hora: <span>{appointment.txtTime}</span></p>
                <p>Síntomas: <span>{appointment.txtSymptom}</span></p>

                <button className="button eliminar u-full-width"
                    onClick={() => (deleteAppointment(appointment.txtId))}>
                    Eliminar &times;
                </button>
            </div>
        </Fragment>
    );
}

Appointment.protoType = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}
export default Appointment;