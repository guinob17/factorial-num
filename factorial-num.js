//Header
let input = require('readline-sync')
console.log('===================')
console.log(' *** FACTORIAL *** ')
console.log('===================')

//declaring variables
let number = 0
let counter = 0
let factorial = 0
let repeat = 0

//do-while operation
do{
    number = Number(input.question('Tybe a number to discover its factorial: '))
    counter = number - 1
    factorial = number

    do{
        factorial *= counter
        counter--
    }while(counter != 0)
    console.log(`The factorial number of ${number} is: ${factorial}!`)
    console.log('===================')

    console.log('Would you like to repeat?')
    console.log('[1] Yes')
    console.log('[2] No')
    repeat = Number(input.question(' '))
}while(repeat == 1)

//the end 
console.log('Program done!')
console.log('===================')