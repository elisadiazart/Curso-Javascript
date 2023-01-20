const sayHello = tuNombre => `Hola ${tuNombre}`
console.log(sayHello('Elisa'))


const calculateSquareArea = lado => lado*lado 
console.log(calculateSquareArea(2))


const calculateTriangleArea = (base, altura) =>(base*altura)/2
console.log(calculateTriangleArea(2, 3))


const calculateCircleArea = radio => (radio*3.14)/2
console.log(calculateCircleArea(4))


const celsiusToFahrenheit = celsius =>celsius * 1.8 + 32
console.log(celsiusToFahrenheit(15))


const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8
console.log(fahrenheitToCelsius(120))


const totalPrice = precio => precio + precio*0.21
console.log(totalPrice(3))


const writeMessage = (name, material, size, note)=>`${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`
console.log(writeMessage('Juan', 'cuero', 'grande', '7'))