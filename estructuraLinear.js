const numeroLetra = (num) => {
    let numero = num.trim();
    numero = +numero;
    numero+= 1;
    return String.fromCharCode(numero);
}

const numeroLetraUnPaso = num => 
String.fromCharCode((+num.trim())+1);


const Caja = x => ({
    map: f => Caja(f(x)), // ? retorna un objeto caja con el resultado de la funcion ejecutada para asi poder hace uso de map las veces que se crean necesarias 
    fuera: f => f(x), // ?ejecuta la funcion retornando el valor sin tener mas acceso a caja
    inpect: `Caja(${x})`
})

const numeroLetraArr = num => 
Caja(num)
.map( s => s.trim())
.map(s => +s)
.map(s => s+1)
.map(s => String.fromCharCode(s))
.fuera(s => s);



let resultado = numeroLetraArr(' 67 ')
console.log(resultado);

const convertirNumero = num => 
Caja(num.replace(/\$/g, ""))
.map(s => +s)


const porcentajeANumero = por =>
Caja(por.replace(/\%/g,""))
.map( s => +s)
.map(s => s * .01)


const descuento = (dinero,descuento) => 
convertirNumero(dinero)
.fuera(s => porcentajeANumero(descuento)
.fuera( v => s - s * v ));

let resultadoDescuento = descuento('$5.00','20%');
console.log(resultadoDescuento);