const randomNumber = (number) =>{
    return Math.floor(Math.random()* number)
}

const posicionAleatoria = (array5Num) =>{
    console.log(array5Num[randomNumber(array5Num.length)])
}

posicionAleatoria([1,2,3,4,5])




const operacionesArray = (array3Num) =>{
    console.log(`La suma de todos los números es: ${array3Num[0] + array3Num[1] + array3Num [2]}`)

    console.log(`La media de todos los números es: ${(array3Num[0] + array3Num[1] + array3Num [2]) / array3Num.length}`)

    console.log(`El mayor es ${Math.max(array3Num[0], array3Num[1] ,array3Num [2])} y el menor es ${Math.min(array3Num[0], array3Num[1] ,array3Num [2])}`)
}

operacionesArray([2,3,4])




const generateRandomNumber =  (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min )
}

const numeroRandomBuscarEnArray = (array5Numeros, numberRandom) =>{
    if (array5Numeros.includes(numberRandom)) {
        console.log( `Esta en la posisción ${array5Numeros.indexOf(numberRandom)}`)
    }
    else { console.log('No lo contiene') }
}

numeroRandomBuscarEnArray([3,4,5,6], generateRandomNumber(0,5))




const createArray = (array) =>{
    array.push(generateRandomNumber(0,100))
    array.push(generateRandomNumber(0,100))
    array.push(generateRandomNumber(0,100))
    return array
}

console.log(createArray([]))


const printMiddleNumber = (array) =>{
    array.shift()
    array.pop()
    console.log(array[0])
}

printMiddleNumber(createArray([]))
