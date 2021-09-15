
const PI = Math.PI
console.log(PI) 


// generate a random number between 0 to 10

const num = Math.floor(Math.random() * 11) //creates a random number between 0 and 100

console.log(num)


//using exponent

console.log(3**2)
console.log(Math.pow(3,2))


// console.log(Math.E)

//Logarithmic
base e results
console.log(Math.log(1))
console.log(Math.log(10))


//generate a number from 0 to 10

let randomNum = Math.random() // generates 0 to 0.99
let numBtnZeroAndTen = randomNum * 11 
console.log(numBtnZeroAndTen) // this gives : min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)


// connecting two or more strings is called concatenation. 

let space = ' '
let firstName = 'Kill'
let lastName = 'Switch'
let country = 'India'
let city = 'Mumbai'
let language = 'JS'
let job = 'forensics_expert'
let quote = "The saying, 'Seeing is Believing' is not correct in 2021"
let quotWithBacTick = `The saying, 'Seeing is Believing' is not correct in 2021`

let fullName = firstName + space + lastName; //concatenation, merging two strings together.
console.log(fullName);


// Some sample Coding
console.log('I hope everyone is enjoying the 30 Days of JS challange.\nDo you?')
console.log('Days\tTopics\tExcercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash symbol (\\)') //To write a backslash



console.log(`The sum of 2 and 3 is 5`) //statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a+b}`) //injecting the data dynamically



let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a>b}`)

let js = 'js'
console.log(js.length)

 
//accessing different characters in js string

let string = 'KillSwitch'
let firstLetter = string[0]
console.log(firstLetter)

let secondLetter = string[1]
let thirdLetter = string[2]
let fourthLetter = string [3]

let lastLetter = string[9]
console.log(lastLetter)

let lastIndex = string.length -1
console.log(lastIndex)
console.log(string[lastIndex])

