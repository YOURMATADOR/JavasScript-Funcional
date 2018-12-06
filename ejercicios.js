// ? callbacks

function hola(nombre) {
  return `Hola amigo ${nombre}`;
  // "Hola amigo" + " "+ nombre
}

// * mandar a llamar funcion como parametro

function suma(func) {
    let a = 20;
  let x = a;
  return func(x);
}
// console.log(hola("la pulga"));

console.log(
  suma(function(x) {
    return x + 10;
  })
);

function funcionH(){
    return "Hola mundo";
}
const funcion = () => { 
    
    //qbqhbfhefbqfhb
    return "Hola mundo";//var, let, const 
}

const functionE = (a,b) => "Hola mundo" + a + b;

 console.log(funcionH());
console.log(funcion());
console.log(functionE(10, 20));
const sumaE = (func) => func(10);
console.log("Suma E",sumaE((c)=> c)); // 10





function doble (a){
    return function (b){
        return a + b;
    }
}
let llamarDoble = doble(10);

console.log(llamarDoble(10));
      