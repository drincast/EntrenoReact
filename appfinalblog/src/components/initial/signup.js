import React from 'react';

import ContactForm from './form';
import SyncValidationForm from './signuofromv';

const Signup = () => {
    const fForma = (datos) => {
        console.log("datos", datos);
    }

    const imp = () => {
        console.log("fForma", fForma);
        console.log("this.fForma", this.fForma);
        console.log("this", this);
        console.log("uno", uno);
        console.log("este es un lescomponent, por tal motivo como no es una clase el this no se usa");
        uno++;
    }

    let uno = 0;

    return(
        <div>
            <h2>signup</h2>
            {/*<ContactForm onSubmit={fForma} />*/}
            <SyncValidationForm onSubmit={fForma} />
            <br />
            <button onClick={imp}>Imp Log</button>
        </div>        
    )
}

export default Signup;