import { filtrarFamilias, ordenAlfabetico, barraDeBusqueda} from "./data.js";
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

    plantillaActual = plantillaActual.replace("#", item.imageUrl); //pusimos # porque el [] da error en consola con la img
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



dibujarPersonajesPantalla(data.got); //le mando todos los personajes a la función que tiene el parámetro listaPersonajes (al cargar la página)

 
function filtro(){
  let filtrados = structuredClone(data);

  // Proceso 1: Filtro por familia
  const listaDesplegable = document.getElementById('familias');
  const seleccion = listaDesplegable.options[listaDesplegable.selectedIndex].value; //document.getElementById("familias").value 57&58


  filtrados = filtrarFamilias(filtrados,seleccion); //hace el filtro por familia y guarda esa lista ordenada en la variable filtrados
  

  //Proceso 2: hacer orden AZ/ZA acá
  const tipoDeOrden = document.getElementById('selectOrder').value;
  if(tipoDeOrden !== ""){
    filtrados = ordenAlfabetico(filtrados,tipoDeOrden);  //hace el orden alfabético y guarda esa lista ordenada en la variable filtrados
  }
  
  // Proceso 3: Hacer filtro por input de texto
  const fullName = document.getElementById('inputSearch').value;
  filtrados = filtrarNombres(filtrados, fullName); 


  
  // Proceso Final: Dibujar el resultado de los proceso en pantalla

  dibujarPersonajesPantalla(filtrados);
}
  
document.querySelector("#familias").addEventListener("change",filtro);
document.querySelector("#selectOrder").addEventListener("change",filtro);
document.querySelector("#inputSearch").addEventListener("keyup", filtro);








 //PARA SACAR EL VALOR DE UNA CAJA DE TEXTO GET ELEMENTBYID().VALUE 



