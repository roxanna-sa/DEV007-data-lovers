// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

//listaPersonajes= c/pj  orden=ascendente/descendente
/**
 * recibe un arreglo y lo ordena en base al parámetro orden
 * @param {Array} listaPersonajes Un arreglo con el formato de got.js
 * @param {string} orden El texto "ascendente" o "descendente"
 * @returns 
 */
export const ordenAlfabetico = (listaPersonajes,orden) => {
  listaPersonajes.sort(orderByFullName);
  if (orden !== "ascendente"){
    return listaPersonajes.reverse();
  }else{
    return listaPersonajes;
  }
};

function orderByFullName(a,b){
  if (a.fullName > b.fullName){
    return 1;
  }else if(b.fullName > a.fullName){
    return -1;
  }else{
    return 0;
  }
}









// add event listener click, 


export const filtrarFamilias = (data, selecciondeCasa) => {
  const filtrar = data.got.filter(casa => casa.family.toLowerCase().includes(selecciondeCasa))
  // console.log(filtrar, "Soy la casa Seleccionada");
    return filtrar;
}  




export const filtrarTitles = (data, titlePersonaje) => {
  const filtrar = data.got.filter(titulo => titulo.title.toLowerCase().includes(titlePersonaje))
  console.log(filtrar, "Soy la casa Seleccionada");
    // return filtrar;
}  


