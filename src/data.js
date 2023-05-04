// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const filtrarDatosStark = (data) => {
//   const filtrar = data.got.filter(casaStark => casaStark.family === "House Stark" || casaStark.family === "Stark")
//  return filtrar;
// }  

// export const filtrarDatosTargaryen = (data) => {
//   const filtrar = data.got.filter(casaTargaryen => casaTargaryen.family === "House Targaryen"|| casaTargaryen.family === "Targaryan")
//  return filtrar;
// }  

// export const filtrarDatosTarly = (data) => {
//   const filtrar = data.got.filter(casaTarly => casaTarly.family === "House Tarly")
//  return filtrar;
// }  

// add event listener click, 
export const filtrarFamilias = (data, selecciondeCasa) => {
  const filtrar = data.got.filter(casa => casa.family.includes(selecciondeCasa))
 return filtrar;
}  

