//listaPersonajes= c/pj  orden=ascendente/descendente


export const ordenAlfabetico = (filtrados,tipoDeOrden) => {
  filtrados.sort(orderByFullName);
  if (tipoDeOrden !== "ascendente"){ //ascendente es el value del select order HTML
    return filtrados.reverse();
  }else{
    return filtrados;
  }
};

function orderByFullName(a,b){
  if (a.fullName > b.fullName){
    return 1; //si el primer elemento es mayor que el segundo (en orden alfabético)
  }else if(b.fullName > a.fullName){
    return -1; //si el segundo elemento es mayor lo mueve para la izq
  }else{
    return 0; //queda donde mismo
  }
}

//Filtro por familias
export const filtrarFamilias = (data, seleccionDeCasa) => {
  const filtrar = data.got.filter(casa => casa.family.toLowerCase().includes(seleccionDeCasa))

  return filtrar;
};


//input

export const filtrarNombres= (data, Name) => {
  const filtrar = data.filter(nombre => nombre.fullName.toLowerCase().includes(Name.toLowerCase()));
  return filtrar;
}; 


//Conteo de personajes por familia

export function conteoPersonajesPorFamilia(listadoPersonajes) {
  let listadoDeFamilias = listadoPersonajes.map(x => x.family); //de todos los personajes, se obtienen las familias. Estas pueden repetirse más de una vez.
  //listadoDeFamilias = listadoDeFamilias.filter(function(familia, index) { //filter siempre pide función dentro
  
  listadoDeFamilias = listadoDeFamilias.filter((familia, index) => listadoDeFamilias.indexOf(familia) === index); 
                                              
  const cantidadPersonajesPorFamilia = []; //se va a guardar la cantidad de personajes por c/familia
  listadoDeFamilias.forEach((familia) => {
    const cantidadEncontradaFamilias = listadoPersonajes.filter(x => x.family.toLowerCase().includes(familia.toLowerCase())).length; //.lenght es para cuantos de c/familia encontró. 
    cantidadPersonajesPorFamilia.push(cantidadEncontradaFamilias);
  });
  
  return { //crea un objeto que tiene 2 listas como resultado, ya que return convencional sólo retorna un objeto que puede ser primitivo o complejo
    "listadoDeFamilias": listadoDeFamilias,                      
    "cantidadPersonajesPorFamilia": cantidadPersonajesPorFamilia
  }
}


