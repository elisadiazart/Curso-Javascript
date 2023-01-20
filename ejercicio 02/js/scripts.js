function sayHello (tuNombre){
    console.log('Hola' + tuNombre)
}
sayHello(' Elisa')



function calculateSquareArea(lado){
    console.log(lado*lado)
}
calculateSquareArea(2)



function calculateTriangleArea(base, altura){
    console.log((base*altura)/2)
}
calculateTriangleArea(2, 3)


function calculateCircleArea(radio){
    console.log((radio*3.14)/2)
}
calculateCircleArea(4)



function celsiusToFahrenheit(celsius){
    console.log(celsius * 1.8 + 32)
}
celsiusToFahrenheit(15)


function fahrenheitToCelsius(fahrenheit){
    console.log((fahrenheit - 32) / 1,8)
}
fahrenheitToCelsius(55)


function totalPrice(precio){
    console.log(precio + precio*0.21)
}
totalPrice(3)


function writeMessage(name, material, size, note){
    console.log(`${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`)
}

writeMessage('Juan', 'cuero', 'grande', '7')