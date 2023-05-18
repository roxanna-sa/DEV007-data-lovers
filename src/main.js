import { filtrarFamilias, ordenAlfabetico, filtrarNombres, conteoPersonajesPorFamilia } from "./data.js";
import data from "./data/got/got.js";


const plantilla = document.querySelector("[name='plantilla']").outerHTML;
document.querySelector("[name='plantilla']").style.display = "none";
let familiaSeleccionada = "";
let personajeSeleccionado = "";


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

}
//Actualizado 15/mayo= Ya no la usamos porque no necesitamos mostrar todos los pjs
// dibujarPersonajesPantalla(data.got); //le mando todos los personajes a la función que tiene el parámetro listaPersonajes (al cargar la página)


function filtro() {
  let filtrados = structuredClone(data);

  // Proceso 1: Filtro por familia
  //const listaDesplegable = document.getElementById('familias');
  //const seleccionDeCasa = listaDesplegable.options[listaDesplegable.selectedIndex].value; //document.getElementById("familias").value 57&58

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


//vincular botones html a JS
function seleccionarFamilia() {

  Array.from(document.getElementsByClassName("botonFamilia")).forEach(x => x.classList.remove("seleccion-boton")); //quitar clase "seleccion-boton" a todos los botones que tengan la clase botón familia
  this.classList.add("seleccion-boton"); //Agregar clase selección botón al botón que se le hace click
  let seleccion = this.children[0].innerHTML.trim().toLowerCase();
   //en [0] porque el hijo (<p> es el único elemento y está en la posición CERO)
  if (seleccion === "todos") { //si la selección es "todos" se deja en vacío para que no filtre nada y me muestre todos los pjs
    seleccion = "";
  }
  familiaSeleccionada = seleccion; //modificación variable global por la seleccion hecha

  filtro(); //llamar a filtro que se encarga de filtrar y dibujar

  //mostrar la segunda columna que es donde aparece el resultado del filtro
  document.querySelector("#root").style.display = "block";

 let root = document.getElementById("root").value;
 console.log("soy root " + root);
}

// let botonSeleccionado = document.getElementById("boton-Personaje")

// botonSeleccionado.addEventListener("click", function(){

//   filtrados = filtrados[i];


//   document.getElementById("columna3").innerHTML = dibujarPersonajesPantalla;
// });


document.querySelector("#selectOrder").addEventListener("change", filtro);
document.querySelector("#inputSearch").addEventListener("keyup", filtro);
Array.from(document.getElementsByClassName("botonFamilia")).forEach(x => x.addEventListener("click", seleccionarFamilia));




// console.log(conteoPersonajesPorFamilia(structuredClone(data.got)));

//PARA SACAR EL VALOR DE UNA CAJA DE TEXTO GET ELEMENTBYID().VALUE





 //Agregar clase selección botón al botón que se le hace click