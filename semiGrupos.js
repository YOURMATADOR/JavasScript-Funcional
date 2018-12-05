const {Map} = require("immutable-ext");

const objeto = ({numero:nuevoNombre}) => ({numero:nuevoNombre});

const semi = (x) =>
({
    x,
    concat: ({x:y}) => (semi(x + y)),
    inspect: () => `Semi ${x}`
})
const boleanos = (x) =>
({
    x,
    concat: ({x:y}) => boleanos( x && y),
    inspect: () => `Boleanos ${x}`
})
const primero = (x) => 
({
    concat: (i) => primero(x),
    inspect: ()=> `Primero ${x}`
})

console.log(objeto({numero:10}));

console.log(semi(10).concat(semi(10)))

console.log(boleanos(false).concat(boleanos(true)).inspect()); // ? primero llama a la funcoina boleanos para poder acceder a las propiedades en el concat que se ejecuta despues

console.log(primero(10).concat(primero(20)).inspect());


const map1 = Map({a:50,b:40,c:30});
const map2 = map1.set('b',1);

console.log(map1.get('b') + " vs " + map2.get('b'));


let objeto1 = Map({nombre: primero("niko"),pagado:boleanos(false),puntos: semi(2),amigos: ["pancho"]});

let objeto2 = Map({nombre: primero("NIKO NI"),pagado:boleanos(true),puntos: semi(5),amigos: ["maria"]});

// ? con la libreira de immutable ext se ejecutan las funciones de los valores del objeto es decir que todos los valores que cuenten con un prototipo concar 
console.log(objeto1.concat(objeto2).toJS())