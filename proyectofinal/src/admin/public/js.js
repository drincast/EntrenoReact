//https://entrenoreact.firebaseapp.com

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

//initialize data base
var database = firebase.database();

//initialize storage
var storage = firebase.storage();
var storageRef = storage.ref();

//autenticar
var ingresar = function(){
  var email = document.getElementById("txtEmail").value;
  var password = document.getElementById("txtPass").value;

  //console.log(email, password);

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(){
    window.location = "agregarplatillo.html";
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error", errorCode, errorMessage);
    // ...
  });
}

//observer login
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("autenticado");
  } else {
    // No user is signed in.
    if (window.location.pathname !== "/index.html"){
      console.log("no autenticado");
      window.location = "index.html";
    }
  }
});

//session close
var closeSession = function(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("cerrar sesiòn correcta");
  }).catch(function(error) {
    // An error happened.
    console.log("error al cerrar la sesión");
  });
}

//mostrar platillos
var ImprimirPlatillos = function(){
  var query = database.ref('alimentos/');
  let ul = document.getElementById("lstPlatillos");
  let itemKey;
  let item;

  console.log("inicia!");
  while(ul.firstChild)
    ul.removeChild(ul.firstChild);

  query.once('value', function(snapshot) {
    snapshot.forEach(function(value, index){
      let li = document.createElement('li')
      let div = document.createElement('div');
      let img = document.createElement('img');
      let button = document.createElement('button');

      console.log(index);

      itemKey = value.key;
      item = value.val();

      storageRef.child(item.urlImagen).getDownloadURL().then(
        function(url){
          img.src = url;
          img.height = '60';
          img.alt = 'imagen de' + item.nombre;
        }
      );

      button.setAttribute('id', itemKey);
      button.setAttribute('data-url-image', item.urlImagen);
      button.setAttribute('onclick', "EliminarPlatillos(this.id, this.dataset.urlImage)");
      button.setAttribute('class', "btn btn-danger");
      button.appendChild(document.createTextNode("Eliminar Platillo"));

      div.appendChild(img);
      div.style.float = "right";
      li.setAttribute("class", "list-group-item");
      li.appendChild(div);
      li.appendChild(document.createTextNode("Nombre: " + item.nombre));
      li.appendChild(document.createElement('br'));
      li.appendChild(document.createTextNode("Descripción: " + item.descripcion));
      li.appendChild(document.createElement('br'));
      li.appendChild(document.createTextNode("Precio: " + item.precio));
      li.appendChild(document.createElement('br'));
      li.appendChild(document.createElement('br'));
      li.appendChild(button);

      ul.appendChild(li);

      //console.log(index, value.key, value.val());

    });
  });
}

//CREAR Platillos
var escribirPlatillo = function(pNombre, pDescripcion, pPrecio, pUrlImagen){
  database.ref('alimentos/').push({
    nombre: pNombre,
    descripcion: pDescripcion,
    precio: pPrecio,
    cantidad: 0,
    urlImagen: pUrlImagen
  })
  .then(function(){
    alert("Se agrego el platillo");
  })
  .catch(function(error){
    alert("error: " + error);
  });
}

//delete platillo
var EliminarPlatillos = function(id, urlImage){
  let imgRef = storageRef.child(urlImage);

  database.ref('alimentos/' + id).remove()
  .then(function(){
    imgRef.delete()
    .then(
      function(){
        console.log("se elimino la imagen: " + urlImage);
      }
    )
    .catch(
      function(error){
        console.error(error);
      }
    );
    alert("se elimino el platillo");
    console.log("se elimino el platillo");
    ImprimirPlatillos();
  })
  .catch(function(erro){
    console.log("Error, no se borro el key: " + id);
  })
}

function FuncionDeLaForma(event){
  try {
    var nombre = document.getElementById('txtNombre').value;
    var descripcion = document.getElementById('txtaDescripcion').value;
    var precio = document.getElementById('txtPrecio').value;
    var urlImg = document.getElementById('txtDirImg').value;

    //event.preventDefault();

    escribirPlatillo(nombre, descripcion, precio, urlImg);

  } catch (e) {
    alert("no se logro agregar el platillo")
    console.error(e);
    return false;
  } finally {

  }
}

function VisualizarArchivo(){
  var preview = document.querySelector("img");
  var archivo = document.querySelector("input[type=file]").files[0];
  var lector = new FileReader();

  try {
    lector.onloadend = function(){
      preview.src = lector.result;
    }

    if(archivo){
      lector.readAsDataURL(archivo);

      var subirImagen = storageRef.child("platillos/" + archivo.name).put(archivo);

      subirImagen.on("state_changed", function(snapshot){
        //cambios en la carga de la imgen
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
        function(error){
          console.log("Error en la carga de la imagen: " + error);
        },
        function(){
          console.log(subirImagen);
          console.log(subirImagen.snapshot);
          //console.log(subirImagen.snapshot.metadata.fullPath);
          console.log(subirImagen.snapshot.downloadURL);
          document.getElementById("txtDirImg").value = subirImagen.snapshot.metadata.fullPath;
          storageRef.child(subirImagen.snapshot.metadata.fullPath).getDownloadURL().then(
            function(url){
              console.log(url);
            }
          )
        }
      );
    }
    else{
      preview.src = "";
    }
  } catch (e) {
    throw new Error( e );
  } finally {

  }
}
