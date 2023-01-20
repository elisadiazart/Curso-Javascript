const mayorEdad = (nombre, edad) => {
if (edad >= 18) {
    return `Hola ${nombre}, eres mayor de edad`
}
    return `Hola ${nombre}, eres menor de edad`
}
console.log(mayorEdad('Elisa', 23))



const numeroMayor = (a, b) => {
    if (a > b) {
        return a
    }
        return b
    }
console.log(numeroMayor(30, 23))



const tipoNumero = (a) => {
    if (a === 0) {
        return 'cero'
    }
    else if (a > 0){
        return 'positivo'
    }
    else if (a < 0){
        return 'negativo'
    }
    }
console.log(tipoNumero(2))



const semaforo = (color) => {
    if (color ==='verde' ) {
        return 'Puedes pasar'
    }
    else if (color === 'naranja'){
        return 'Acelera'
    }
    else if (color === 'rojo'){
        return 'Frena'
    }
    }
console.log(semaforo('rojo'))



const tresNotas = (a,b, c) => {
    const media = (a + b + c)/3
    if (media <5 ) {
        return 'Suspenso'
    }
    else if (media > 5 && media< 8){
        return 'Aprobado'
    }
    else if (media > 8 && media< 10){
        return 'Matrícula de honor'
    }
    }
console.log(tresNotas(6,7,6))


const ordenarNumeros = (a,b, c) => {
    if (a > b && b> c) {
        return 'a,b,c'
    }
    else if (a > b && b < c){
        return 'a,c,b'
    }
    else if (b>a && a> c){
        return 'b,a,c'
    }
    else if (b>a && c>a){
        return 'b,c,a'
    }
    else if (c>a && b>a){
        return 'c,b,a'
    }
    else if (c>a && a>b){
        return 'c,a,b'
    }
    }
console.log(ordenarNumeros(6,7,6))