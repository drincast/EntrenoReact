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

var ImprimirPlatillos = function(){
  var query = database.ref('alimentos/');
  let ul = document.getElementById("lstPlatillos");
  let itemKey;
  let item;

  query.on('value', function(snapshot) {
    snapshot.forEach(function(value, index){
      let li = document.createElement('li')
      let div = document.createElement('div');
      let img = document.createElement('img');
      let br = document.createElement('br');



      itemKey = value.key;
      item = value.val();

      storageRef.child(item.urlImagen).getDownloadURL().then(
        function(url){
          img.src = url;
          img.height = '60';
          img.alt = 'imagen de' + item.nombre;
        }
      );

      div.appendChild(img);
      div.style.float = "right";
      li.setAttribute("class", "list-group-item");
      li.appendChild(div);
      li.appendChild(document.createTextNode("nombre:" + item.nombre));
      li.appendChild(br);
      li.appendChild(document.createTextNode("nombre:" + item.descripcion));
      li.appendChild(document.createTextNode("nombre:" + item.precio));

      ul.appendChild(li);




      console.log(index, value.key, value.val());
    });
  });
}

var escribirPlatillo = function(pNombre, pDescripcion, pPrecio, pUrlImagen){
  database.ref('alimentos/').push({
    nombre: pNombre,
    descripcion: pDescripcion,
    precio: pPrecio,
    cantidad: 0,
    urlImagen: pUrlImagen
  });
}

var EliminarPlatillos = function(id){
  databse.ref('alimentos/' + id).remove()
  .then(function(){
    alert("se elimino el platillo");
    console.log("se elimino el platillo");
  })
  .catch(function(erro){
    console.log("Error, no se borro el key: " + id);
  })
}

function FuncionDeLaForma(){
  try {
    var nombre = document.getElementById('txtNombre').value;
    var descripcion = document.getElementById('txtaDescripcion').value;
    var precio = document.getElementById('txtPrecio').value;

    var urlImg = document.getElementById('txtDirImg').value;

    alert(nombre + ' ' + descripcion + ' ' + precio + ' ' + urlImg);

    escribirPlatillo(nombre, descripcion, precio, urlImg);

    console.log("fin");
  } catch (e) {
    console.log(e);
    return false;
  } finally {

  }

}

//visualizar imagen
var storage = firebase.storage();
var storageRef = storage.ref();

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
