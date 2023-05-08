import { filtrarFamilias, filtrarNombres, ordenAlfabetico } from "./data.js";
import data from "./data/got/got.js";

//import * as datos from "./data.js";
//import { filtrarCasas} from "./data.js";


console.log(data, "soy ese console");

const plantilla = document.querySelector("[name='plantilla']").outerHTML;
document.querySelector("[name='plantilla']").style.display = "none";



function dibujarPersonajesPantalla(listaPersonajes) {
  document.querySelector("#root").innerHTML = ""; //limpiar el root que es donde dibujamos cada personaje
  listaPersonajes.forEach((item) => { //data.got.forEach((item, index)
    let plantillaActual = plantilla;

    plantillaActual = plantillaActual.replace("[Foto-Personaje]", item.imageUrl);
    plantillaActual = plantillaActual.replace("[PrimerNombre-Personaje]", item.firstName);
    plantillaActual = plantillaActual.replace("[Apellido-Personaje]", item.lastName);
    plantillaActual = plantillaActual.replace("[Nombre-Personaje]", item.fullName);
    plantillaActual = plantillaActual.replace("[Titulo-Personaje]", item.title);
    plantillaActual = plantillaActual.replace("[Fecha-Nacimiento]", item.born);
    plantillaActual = plantillaActual.replace("[Fecha-Muerte]", item.death);
    // es lo mismo que el if
    plantillaActual = plantillaActual.replace("[Casa-Personaje]", (item.family === "" ? "-" : item.family)); // ?= entonces : = si no (lo hago de esta forma por si hay campos vacíos)

    document.querySelector("#root").innerHTML += plantillaActual;
  });

}


// funcion inicial
//dibujarPersonajesPantalla(data.got);
// const ordenadaAlfabeticamente = ordenAlfabetico(structuredClone(data.got),"ascendente");
// dibujarPersonajesPantalla(ordenadaAlfabeticamente);
dibujarPersonajesPantalla(data.got);

function filtro(){
  let filtrados = structuredClone(data);

  // Proceso 1: Filto por familia
  const listaDesplegable = document.getElementById('familias');
  const seleccion = listaDesplegable.options[listaDesplegable.selectedIndex].value; //document.getElementById("familias").value 57&58


  filtrados = filtrarFamilias(filtrados,seleccion);
  

  //Proceso 2: hacer orden AZ/ZA acá
  const ordenados = document.getElementById('selectOrder').value;
  filtrados = ordenAlfabetico(filtrados,ordenados);


  // Proceso 3: Hacer filtro por input de texto
 // const fullName = document.getElementById('inputSearch').value;
 // filtrados = filtrarNombres(filtrados, fullName);

  // Proceso Final: Dibujar el resultado de los proceso en pantalla

  dibujarPersonajesPantalla(filtrados);
}
  
document.querySelector("#familias").addEventListener("change",filtro);
document.querySelector("#selectOrder").addEventListener("change",filtro);
//document.querySelector("#inputSearch").addEventListener("search", filtro);








/*botonBuscar.addEventListener("click", () => {
  
  const personajeIngresado = document.getElementById("inputSearch");
  const  titlePersonaje= personajeIngresado.input[personajeIngresado.selectedIndex].value
  let filtrados = filtrarTitles(structuredClone(data), titlePersonaje);
   console.log(filtrados)

   dibujarPersonajesPantalla(filtrados);

  }
 )
   document.querySelector("#familias").addEventListener("change", botonBuscar);*/





