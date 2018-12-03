const fs = require("fs");

const Izquierda = x => ({
  fuera: f => f(x),
  map: f => Izquierda(f(x)),
  sacar: (a, b) => a(x),
  imprimir: () => `Izquierda(${x})`
});

const Derecha = x => ({
  fuera: f => Derecha(x),
  map: f => Derecha(x), // ? derecha ignorara la funcion que se pasa como argumento
  sacar: (a, b) => b(x), // ? ejecutara la funcion del segundo parametro
  imprimir: () => `Derecha(${x})`
});

const valorRecuperado = valor => (!!valor ? Izquierda(valor) : Derecha(null));

const recuperarColor = nombre =>
  valorRecuperado(
    { rojo: "#FF0000", verde: "#00FF00", azul: "#0000FF" }[nombre]
  );

console.log(
  Derecha(10)
    .map(a => a + 10)
    .sacar(x => x, y => "Error al ejecutar las funciones")
);

console.log(
  recuperarColor("amarillo")
    .map(x => x.slice(1))
    .map(x => x.toLowerCase())
    .sacar(x => x, x => "no se encontro el color")
);
const esNulo = (func) => !!func() ? Izquierda(func()) : Derecha(null);

const esFalso = (x) =>!!x ? Izquierda(x) : Derecha(null);
const ejecutarFuncion= (func) => {
    try {
        return (Izquierda(func()));
    } catch (err) {
        return Derecha(null);
    }
}
const recuperarPuerto = () => 
    ejecutarFuncion( () =>fs.readFileSync("puerto.json"))
    .fuera((c) => ejecutarFuncion(()=> JSON.parse(c)))
    .fuera((c) => esNulo(()=> c.puerto))
    .sacar(x => x, () => 3000)

const irPaginaInicio = () => "Bievenido a el blog de lalinux!";
const irInicioSesion= () => "Iniciar sesion";

const iniciarSesion =(usuario) => 
esFalso(usuario)
.sacar(x=> irPaginaInicio(), x => irInicioSesion());


console.log(recuperarPuerto());

console.log(iniciarSesion(false));