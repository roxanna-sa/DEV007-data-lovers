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
    expect(ordenAlfabetico(["C","A","D","B"],"ascendente")).toStrictEqual(["A","B","C","D"]); //toStrictEqual es para objetos completos 
  });

  it("arreglo ordenado descendente", ()=>{
    expect(ordenAlfabetico(["C","A","D","B"],"descendente")).toStrictEqual(["D","C","B","A"]);
  });
});