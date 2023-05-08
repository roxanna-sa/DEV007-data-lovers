import { ordenAlfabetico } from '../src/data.js';

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
  it("es una funcion", ()=> {
    expect(typeof ordenAlfabetico).toBe("function"); //toBe es para datos primitivos
  });

  it("arreglo ordenado ascendente", ()=>{
    expect(ordenAlfabetico([{"fullName":"C"},{"fullName":"A"},{"fullName":"D"},{"fullName":"B"}],"ascendente")).toStrictEqual([{"fullName":"A"},{"fullName":"B"},{"fullName":"C"},{"fullName":"D"}]); //toStrictEqual es para objetos completos 
  });

  it("arreglo ordenado descendente", ()=>{
    expect(ordenAlfabetico([{"fullName":"C"},{"fullName":"A"},{"fullName":"D"},{"fullName":"B"}],"descendente")).toStrictEqual([{"fullName":"D"},{"fullName":"C"},{"fullName":"B"},{"fullName":"A"}]);
  });
});



  




