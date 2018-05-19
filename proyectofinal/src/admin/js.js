//Initialize Firebase
var config = {
  apiKey: "AIzaSyC9J7EKpaOcuYQqc-DZetwPp_dpX_fWTKY",
  authDomain: "entrenoreact.firebaseapp.com",
  databaseURL: "https://entrenoreact.firebaseio.com",
  projectId: "entrenoreact",
  storageBucket: "entrenoreact.appspot.com",
  messagingSenderId: "738145922017"
};
firebase.initializeApp(config);

//CREAR Platillos

var database = firebase.database();

var escribirPlatillo = function(pNombre, pDescripcion, pPrecio){
  database.ref('alimentos/').push({
    nombre: pNombre,
    descripcion: pDescripcion,
    precio: pPrecio,
    cantidad: 0
  });
}

function FuncionDeLaForma(){
  try {
    var nombre = document.getElementById('txtNombre').value;
    var descripcion = document.getElementById('txtaDescripcion').value;
    var precio = document.getElementById('txtPrecio').value;

    alert(nombre + ' ' + descripcion + ' ' + precio);

    escribirPlatillo(nombre, descripcion, precio);
  } catch (e) {
    console.log(e);
  } finally {

  }

}
