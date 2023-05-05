import data from "./data/got/got.js";
import { filtrarFamilias } from './data.js'; //se ocupará para hacer el orden alfabético cuando el usuario modifique el select

//import { filtrarCasas} from "./data.js";


//filtrarCasas(data.got);



console.log(data, "soy ese console");



//ordenAlfabetico(structuredClone(data.got),"ascendente");   cuando el user modifique el select lo uso
//ordenAlfabetico(structuredClone(data.got),"descendente");  cuando el user modifique el select lo uso

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

};


// funcion inicial
//dibujarPersonajesPantalla(data.got);
// const ordenadaAlfabeticamente = ordenAlfabetico(structuredClone(data.got),"ascendente");
// dibujarPersonajesPantalla(ordenadaAlfabeticamente);
dibujarPersonajesPantalla(data.got);







function filtro() {

  const listaDesplegable = document.getElementById('familias');
  const selecciondeCasa = listaDesplegable.options[listaDesplegable.selectedIndex].value;
  let filtrados = filtrarFamilias(structuredClone(data), selecciondeCasa);
  console.log(filtrados);

  dibujarPersonajesPantalla(filtrados);
}

document.querySelector("#familias").addEventListener("change", filtro);




// botonBuscar.addEventListener("click", () => {
  
//   const personajeIngresado = document.getElementById("inputSearch");
//   const  titlePersonaje= personajeIngresado.input[personajeIngresado.selectedIndex].value
//   let filtrados = filtrarTitles(structuredClone(data), titlePersonaje);
//   console.log(filtrados)

//   dibujarPersonajesPantalla(filtrados);

// }
// )
// document.querySelector("#familias").addEventListener("change", botonBuscar);




//trabajar desde esta línea

// console.log (datos.filtrarDatosStark(data), "filtro Casa Stark");
// console.log (datos.filtrarDatosTargaryen(data), "filtro Casa Targaryen");
// console.log (datos.filtrarDatosTarly(data), "filtro Casa Tarly")


//Llamar elementos de lista desplegable 
