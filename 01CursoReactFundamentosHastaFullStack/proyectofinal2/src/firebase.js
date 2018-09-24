import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC9J7EKpaOcuYQqc-DZetwPp_dpX_fWTKY",
    authDomain: "entrenoreact.firebaseapp.com",
    databaseURL: "https://entrenoreact.firebaseio.com",
    projectId: "entrenoreact",
    storageBucket: "entrenoreact.appspot.com",
    messagingSenderId: "738145922017"
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

const platillos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');
const archivos = storage.ref();

const datos = {platillos, bebidas, archivos};

export default datos;