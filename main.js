import { filtrarFamilias, ordenAlfabetico, filtrarNombres, conteoPersonajesPorFamilia } from "./data.js";
import data from "./data/got/got.js";


const plantilla = document.querySelector("[name='plantilla']").outerHTML;
document.querySelector("[name='plantilla']").style.display = "none";
let familiaSeleccionada = "";
let miembrosFamilia = {} //acá se va a guardar un objeto, por eso está vacío
const mediaQMovil = window.matchMedia('(max-width: 500px)');
const mediaQTablet = window.matchMedia('(max-width: 855px)');

/**
 * Esta función se encarga de dibujar la segunda columna
 * @param {filtrados} listaPersonajes 
 */
function dibujarPersonajesPantalla(listaPersonajes) {
  document.querySelector("#root").innerHTML = ""; //limpiar el root que es donde dibujamos cada personaje
  listaPersonajes.forEach((item) => { //data.got.forEach((item, index)
    let plantillaActual = plantilla;

    plantillaActual = plantillaActual.replace("#", item.imageUrl); //pusimos # porque el [] da error en consola con la img
    plantillaActual = plantillaActual.replace("[Nombre-Personaje]", item.fullName);
    plantillaActual = plantillaActual.replace("[id]",item.id);
    // es lo mismo que el if
    // plantillaActual = plantillaActual.replace("[Casa-Personaje]", (item.family === "" ? "-" : item.family)); // ?= entonces : = si no (lo hago de esta forma por si hay campos vacíos)

    document.querySelector("#root").innerHTML += plantillaActual;
  });

  Array.from(document.getElementsByClassName("botonPersonaje")).forEach(x => x.addEventListener("click",dibujarMiembrosPantalla));
  
}
//Actualizado 15/mayo= Ya no la usamos porque no necesitamos mostrar todos los pjs
//dibujarPersonajesPantalla(data.got); //le mando todos los personajes a la función que tiene el parámetro listaPersonajes (al cargar la página)
function dibujarMiembrosPantalla(){
  Array.from(document.getElementsByClassName("botonPersonaje")).forEach(x => x.classList.remove("seleccion-boton")); //quitar clase "seleccion-boton" a todos los botones que tengan la clase botón familia
  this.classList.add("seleccion-boton"); //Agregar clase selección botón al botón que se le hace click

  const ID = parseInt(this.id);
  const personajeSeleccionado = data.got[ID];
  
  document.querySelector("#imgPersonajeSeleccionado").src = personajeSeleccionado.imageUrl;
  document.querySelector("#nombrePersonajeSeleccionado").innerHTML = personajeSeleccionado.firstName;
  document.querySelector("#apellidoPersonajeSeleccionado").innerHTML = personajeSeleccionado.lastName;
  document.querySelector("#nombreCompletoPersonajeSeleccionado").innerHTML = personajeSeleccionado.fullName;
  document.querySelector("#tituloPersonajeSeleccionado").innerHTML = personajeSeleccionado.title;
  document.querySelector("#familiaPersonajeSeleccionado").innerHTML = personajeSeleccionado.family;
  document.querySelector("#nacimientoPersonajeSeleccionado").innerHTML = personajeSeleccionado.born;
  document.querySelector("#muertePersonajeSeleccionado").innerHTML = personajeSeleccionado.death;

  document.querySelector("#columna3").style.display = "block";

  if (mediaQMovil.matches || mediaQTablet.matches){
    document.querySelector("#root").style.display = "none";
  }
}
 
function filtro(){
  let filtrados = structuredClone(data);

  // Proceso 1: Filtro por familia

  filtrados = filtrarFamilias(filtrados, familiaSeleccionada); //hace el filtro por familia y guarda esa lista ordenada en la variable filtrados
  console.log(filtrados)

  //Proceso 2: hacer orden AZ/ZA acá
  const tipoDeOrden = document.getElementById('selectOrder').value;
  if (tipoDeOrden !== "") {
    filtrados = ordenAlfabetico(filtrados, tipoDeOrden);  //hace el orden alfabético y guarda esa lista ordenada en la variable filtrados
  }

  // Proceso 3: Hacer filtro por input de texto
  const fullName = document.getElementById('inputSearch').value;
    filtrados = filtrarNombres(filtrados, fullName);
    
  // Proceso Final: Dibujar el resultado de los proceso en pantalla
  dibujarPersonajesPantalla(filtrados);
    
}

function filtrarSinSeleccion(){

  document.querySelector("#root").style.display = "block";
  document.querySelector("#columna3").style.display = "none";
  familiaSeleccionada="";
  filtro();
  
}
//vincular botones html a JS
function seleccionarFamilia(){
  Array.from(document.getElementsByClassName("botonFamilia")).forEach(x => x.classList.remove("seleccion-boton")); //quitar clase "seleccion-boton" a todos los botones que tengan la clase botón familia
  this.classList.add("seleccion-boton"); //Agregar clase selección botón al botón que se le hace click
  let seleccion = this.children[0].innerHTML.trim().toLowerCase(); //en [0] porque el hijo (<p> es el único elemento y está en la posición CERO)
  if (seleccion === "all"){ //si la selección es "todos" se deja en vacío para que no filtre nada y me muestre todos los pjs
    seleccion = "";
  }
  familiaSeleccionada = seleccion; //modificación variable global por la seleccion hecha

  if (seleccion === ""){
    document.getElementById("cantidadMiembros").innerHTML = "";
  }else{

    //Escribir cantidad de miembros por familia
    const indiceEncontrado = miembrosFamilia.listadoDeFamilias.findIndex((item)=> item.toLowerCase().includes(seleccion));
    const cantidadMiembros = miembrosFamilia.cantidadPersonajesPorFamilia [indiceEncontrado];
    document.getElementById("cantidadMiembros").innerHTML = cantidadMiembros;
  }
  filtro(); //llamar a filtro que se encarga de filtrar y dibujar

  //mostrar la segunda columna que es donde aparece el resultado del filtro

  document.querySelector("#root").style.display = "block";
  document.querySelector("#cantidadDeMiembros").style.display = "block";
  document.querySelector("#selectOrder").style.display = "block";
  
  if (mediaQMovil.matches || mediaQTablet.matches){
    document.querySelector("#columna1").style.display = "none";
  }
}

document.querySelector("#selectOrder").addEventListener("change",filtro);
document.querySelector("#inputSearch").addEventListener("keyup", filtrarSinSeleccion);
Array.from(document.getElementsByClassName("botonFamilia")).forEach(x => x.addEventListener("click",seleccionarFamilia));

miembrosFamilia = conteoPersonajesPorFamilia(structuredClone(data.got));



/*function limpiarFiltroFamilia(){
  Array.from(document.getElementsByClassName("botonFamilia")).forEach(x => x.classList.remove("seleccion-boton"));
  document.querySelector("#root").style.display = "none";
  document.querySelector("#cantidadDeMiembros").style.display = "none";
  document.querySelector("#selectOrder").style.display = "none";
  document.querySelector("#columna3").style.display = "none";
  Se usó para borrar elementos al hacer click en el logo principal, pero se decidió utilizar una etiqueta <a> en HTML para recargar el sitio 
}*/

/*document.querySelector("#logo-principal").addEventListener("click",limpiarFiltroFamilia);*/

//PARA SACAR EL VALOR DE UNA CAJA DE TEXTO GET ELEMENTBYID().VALUE


