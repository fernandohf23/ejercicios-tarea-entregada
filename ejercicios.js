//100. Escribe una función que reciba un array de números y devuelva true si el array contiene al menos un número par.
function arrayNumero(...array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            return`Existe un numero par ${array[i]}`
        }
    }
    return "No existe ningun numero par en el array"
}

console.log(arrayNumero(1,3,5,7,3,4))

//101. Escribe una función que determine si un número es par o impar.
function parImpar(num) {
    if (num % 2 == 0) {
        return `El numero ${num} es par`
    } else {
        return `El numero ${num} es impar`
    }
}
console.log(parImpar(4))

//102. Escribe una función que determine si un año es bisiesto.
let year = 2025
function yearBisiesto(year) {
    if (year % 4 === 0) {
        if ((year % 100 === 0 && !(year % 400 === 0))) {
            return false
        }
        return true
    }
}
console.log(yearBisiesto(year) ? `El año ${year} es bisiesto` : `El año ${year} no es bisiesto`)

//103. Escribe una función que encuentre el mayor de tres números.
function mayor(...array){
    let mayorr=0
    for(let i=0;i<array.length;i++){
        if(array[i]>mayorr){
            mayorr=array[i]
        }
    }
    return mayorr
}

console.log(mayor(1,5,9,6,3,8))

//104. Escribe una función que invierta una cadena de texto.
function investString(text) {
    let newText = ""
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i]
    }
    return newText
}
console.log(investString('Fer'))

//105. Escribe una función que calcule la suma de los primeros n números naturales.
function sumaNumeros(arr ,numero){
    let suma=0
    for(let i=0;i<numero;i++){
        suma += arr[i]
    }
    return suma
}

console.log(sumaNumeros([1,5,6,8,9,4],4))

//106. Escribe una función que determine si una cadena de texto es un palíndromo.
const palindromo = (string) => {
    let notSpace = string.replace(/\s/g, '').toLowerCase()
    let boolean = false
    for (let i = 0; i < notSpace.length - 1; i++) {
        if (notSpace[i] == notSpace[(notSpace.length - 1) - i]) {
            boolean = true
        } else {
            boolean = false
        }
    }
    return boolean
}
console.log(palindromo('we life') ? 'Es un texto palindromo' : 'No es un texto palindromo')

//107. Escribe una función que encuentre el factorial de un número.
function factorial(numero){
    let multiplicaion=1

    for (let i=1;i<=numero;i++){
        multiplicaion *=i
    }
    return multiplicaion
}

console.log(factorial(5))

//108. Escribe una función que encuentre el valor máximo en un arreglo de números.
function maxNum(array){
    let mayor = 0
    for (const item of array) {
        if(item > mayor){
            mayor = item
        }
    }
    return mayor
}
let arrayMax = [1,2,3,4,9,4,5]

//109. Escribe una función que encuentre el valor mínimo en un arreglo de números.
function minNum(array){
    let menor = array[0]
    for (const item of array) {
        if(item < menor){
            menor = item
        }
    }
    return menor
}
let arrayMin = [9,20,3,4,9,4,5]
console.log(`El minimo numero de array es: ${minNum(arrayMin)}`)

//110. Escribe una función que calcule la media de un arreglo de números.
function calculateMediaArregloo(arr) {
    if (arr.length === 0) {
        throw new Error("El arreglo no puede estar vacío");
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let numbers = [1, 2, 3, 4, 5];
console.log(calculateMediaArregloo(numbers));