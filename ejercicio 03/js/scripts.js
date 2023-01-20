function sayHello (tuNombre){
    return `Hola ${tuNombre}`
}
console.log(sayHello('Elisa'))



function calculateSquareArea(lado){
    return lado*lado 
}
console.log(calculateSquareArea(2))



function calculateTriangleArea(base, altura){
    return (base*altura)/2
}
console.log(calculateTriangleArea(2, 3))


function calculateCircleArea(radio){
    return(radio*3.14)/2
}
console.log(calculateCircleArea(4))



function celsiusToFahrenheit(celsius){
    return celsius * 1.8 + 32
}
console.log(celsiusToFahrenheit(15))


function fahrenheitToCelsius(fahrenheit){
    return(fahrenheit - 32) / 1.8
}
console.log(fahrenheitToCelsius(55))


function totalPrice(precio){
    return precio + precio*0.21
}
console.log(totalPrice(3))


function writeMessage(name, material, size, note){
    return `${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`
}

console.log(writeMessage('Juan', 'cuero', 'grande', '7'))