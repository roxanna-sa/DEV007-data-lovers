import data from "./data/got/got.js";
console.log(data);

const plantilla = document.querySelector("[name='plantilla']").outerHTML;
document.querySelector("[name='plantilla']").style.display = "none";

data.got.forEach((item, index)=>{
  
  let plantillaActual = plantilla;

  plantillaActual = plantillaActual.replace("[Foto-Personaje]", item.imageUrl);
  plantillaActual = plantillaActual.replace("[PrimerNombre-Personaje]", item.firstName);
  plantillaActual = plantillaActual.replace("[Apellido-Personaje]", item.lastName);
  plantillaActual = plantillaActual.replace("[Nombre-Personaje]", item.fullName);
  plantillaActual = plantillaActual.replace("[Titulo-Personaje]", item.title);
  

// es lo mismo que el if
  plantillaActual = plantillaActual.replace("[Casa-Personaje]", (item.family == "" ? "-" : item.family)); // ?= entonces : = si no (lo hago de esta forma por si hay campos vacíos)
  
  document.querySelector("#root").innerHTML +=  plantillaActual;
});
