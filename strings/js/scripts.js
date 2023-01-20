const convertirMayusMin= (word) => {
    if(word.length > 5) {
        return word.toUpperCase()
    }
    else {
        return word.toLowerCase()
    }
}

console.log(convertirMayusMin('perro'))




const convertirMayusMin2 = (word) => {
   return word.length > 5 ? word.toUpperCase() : word.toLowerCase()
}

console.log(convertirMayusMin2('perro'))


const tipoConjugacion = (a,b) => {
    if (a.endsWith('ar') && b.endsWith('ar')){
        return 'Son de la primera conjugación'
    }
    else if (a.endsWith('ar') && b.endsWith('er')){
        return ` ${a} es de la primera conjugación y ${b} de la segunda`
    }
    else if (a.endsWith('ar') && b.endsWith('ir')){
        return ` ${a} es de la primera conjugación y ${b} de la tercera`
    }
    else if (a.endsWith('er') && b.endsWith('ar')){
        return ` ${a} es de la segunda conjugación y ${b} de la primera`
    }
    else if (a.endsWith('er') && b.endsWith('er')){
        return `Son de la segunda conjugación`
    }
    else if (a.endsWith('er') && b.endsWith('ir')){
        return ` ${a} es de la segunda conjugación y ${b} de la tercera`
    }
    else if (a.endsWith('ir') && b.endsWith('ar')){
        return ` ${a} es de la tercera conjugación y ${b} de la primera`
    }
    else if (a.endsWith('ir') && b.endsWith('er')){
        return ` ${a} es de la tercera conjugación y ${b} de la segunda`
    }
    else if (a.endsWith('ir') && b.endsWith('ir')){
        return ` Son de la tercera conjugación`
    }
}

console.log(tipoConjugacion('comer', 'dormir'))




const nombreApellido = (nombreCompleto) => {
    console.log (nombreCompleto.substring(0, nombreCompleto.indexOf(' ')))
    console.log (nombreCompleto.substring(nombreCompleto.indexOf(' ') + 1))

}

nombreApellido('Elisa Diaz')


const generateWord = (palabra1, palabra2, palabra3) =>{
    console.log (palabra1.charAt(Math.floor(Math.random()*palabra1.length))
    + palabra1.charAt(Math.floor(Math.random()*palabra1.length))
    + palabra2.charAt(Math.floor(Math.random()*palabra2.length))
    + palabra2.charAt(Math.floor(Math.random()*palabra2.length))
    + palabra3.charAt(Math.floor(Math.random()*palabra3.length))
    + palabra3.charAt(Math.floor(Math.random()*palabra3.length)))
}

generateWord('casa','lirio','moto')


const emailDominio = (emailCompleto) => {
    console.log(`El usuario es doria es ${(emailCompleto.substring(0, emailCompleto.indexOf('@')))}`)
    console.log(`El dominio es ${(emailCompleto.substring(emailCompleto.indexOf('@') + 1))}`)
}

emailDominio('elisadiaz@gmail.com')