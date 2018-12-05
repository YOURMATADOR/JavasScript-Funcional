const objeto = ({numero:nuevoNombre}) => ({numero:nuevoNombre});

const semi = (x) =>
({
    x,
    concat: ({x:y}) => (semi(x + y)),
    inspect: () => `Semi ${x}`
})

console.log(objeto({numero:10}));

console.log(semi(10).concat(semi(10)))


