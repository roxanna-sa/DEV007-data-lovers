import { filtrarFamilias, ordenAlfabetico, filtrarNombres, conteoPersonajesPorFamilia } from '../src/data.js';
import data from "../src/data/got/got.js";

/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

//TEST PARA ORDEN ALFABÉTICO

describe("ordenAlfabetico", ()=> {
  it("es una función", ()=> {
    expect(typeof ordenAlfabetico).toBe("function"); //toBe es para datos primitivos
  });

  it("arreglo ordenado ascendente", ()=>{
    expect(ordenAlfabetico([{"fullName":"C"},{"fullName":"C"},{"fullName":"A"},{"fullName":"D"},{"fullName":"B"}],"ascendente")).toStrictEqual([{"fullName":"A"},{"fullName":"B"},{"fullName":"C"},{"fullName":"C"},{"fullName":"D"}]); //toStrictEqual es para objetos completos 
  });

  it("arreglo ordenado descendente", ()=>{
    expect(ordenAlfabetico([{"fullName":"C"},{"fullName":"A"},{"fullName":"D"},{"fullName":"B"}],"descendente")).toStrictEqual([{"fullName":"D"},{"fullName":"C"},{"fullName":"B"},{"fullName":"A"}]);
  });
});

//TEST PARA EL FILTRO POR FAMILIAS

describe("filtrarFamilias", ()=> {
  it("es una función", ()=> {
    expect(typeof filtrarFamilias).toBe("function");
  });

  it("filtrar por Tarly", ()=> {
    expect(filtrarFamilias(data,"tarly")).toStrictEqual([{
      "id": 1,
      "firstName": "Samwell",
      "lastName": "Tarly",
      "fullName": "Samwell Tarly",
      "title": "Maester",
      "family": "House Tarly",
      "imageUrl": "./img/SamwellTarly.png",
      "born": "283 dC",
      "death": "Unknown"
    }]);
  });
});

//TEST PARA FILTRAR NOMBRES EN EL INPUT

describe("filtrarNombres", ()=> {
  it("es una función", ()=> {
    expect(typeof filtrarNombres).toBe("function");
  });

  it("filtrar por Cersei", ()=> {
    expect(filtrarNombres(data.got,"Cersei Lannister")).toStrictEqual([{
      "id": 9,
      "firstName": "Cersei",
      "lastName": "Lannister",
      "fullName": "Cersei Lannister",
      "title": "Lady of Casterly Rock",
      "family": "House Lannister",
      "imageUrl":  "./img/CerseiLannister.png",
      "born": "262 dC",
      "death": "305 dC"
    }])
  })
});

 
//TEST PARA FILTRAR CANTIDAD DE MIEMBROS POR FAMILIA

describe("conteoPersonajesPorFamilia", ()=> {
  it("es una función", ()=> {
    expect(typeof conteoPersonajesPorFamilia).toBe("function");
  });

  it("contando personajes por familia", ()=> {
    expect(conteoPersonajesPorFamilia(data.got)).toStrictEqual({"listadoDeFamilias":["House Targaryen","House Tarly","House Stark","House Baratheon","House Lannister","House Greyjoy","House Clegane","House Baelish","House Seaworth","Unknown","House Tyrell","Free folk","House Tarth","Naath","House Bolton","Naharis","Lorath","House Mormont","Sparrow","House Martell","Sand","Unsullied","Qyburn","Bronn"],"cantidadPersonajesPorFamilia":[3,1,10,5,4,3,1,1,1,3,2,3,1,1,2,1,2,2,1,1,1,1,1,1]})
  })
});




