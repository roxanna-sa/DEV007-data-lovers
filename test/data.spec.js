import { filtrarFamilias, ordenAlfabetico } from '../src/data.js';
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

describe("ordenAlfabetico", ()=> {
  it("es una función", ()=> {
    expect(typeof ordenAlfabetico).toBe("function"); //toBe es para datos primitivos
  });

  it("arreglo ordenado ascendente", ()=>{
    expect(ordenAlfabetico([{"fullName":"C"},{"fullName":"A"},{"fullName":"D"},{"fullName":"B"}],"ascendente")).toStrictEqual([{"fullName":"A"},{"fullName":"B"},{"fullName":"C"},{"fullName":"D"}]); //toStrictEqual es para objetos completos 
  });

  it("arreglo ordenado descendente", ()=>{
    expect(ordenAlfabetico([{"fullName":"C"},{"fullName":"A"},{"fullName":"D"},{"fullName":"B"}],"descendente")).toStrictEqual([{"fullName":"D"},{"fullName":"C"},{"fullName":"B"},{"fullName":"A"}]);
  });
});

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
      "imageUrl": "https://thronesapi.com/assets/images/sam.jpg",
      "born": "283 DC"
    }]);
  });
});

  




