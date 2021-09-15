# Data types
Types:
    1) Primitive data types
    2) Non-primitive data types(Object References)


# Primitive Data types
1) Numbers - Integers, Floats
2) Strings - Any data under single quote, double quote or backtick quote
3) Booleans - true or false value
4) Null - empty value or no value
5) Undefined - a declared value without a value

# Non-Primitive Data types in JS includes:
1) Objects
2) Functions 
3) Arrays

Now we know that there are 2 types of data types but what do these 2 actually means ?

Primitive data types are immutable(non-modifiable) data types. Once created these cannot be modified.
Ex:
let word = 'Kill Switch'

Primitive data types are compared by it's values. Let's see how

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)  //True

let js = 'Javascript'
let py = 'Python'

console.log(js == py)  //false

let lightOne = true
let lightOff = false
console.log(lightOne = lightOff) //false

# Non-Primitive Data Types

Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created. Let us see by creating an array. An array is a list of data types in a square bracket. Array can contain same or different data types. Array values are referenced by their index. In JS array index starts at zero i.e. the first element of an array is found at index zero, the second element at index one, and the third element at index two and same goes on. :)

For ex:

let nums = [1,2,3]
nums[0] = 10
console.log(nums) // [10,2,3]

Non-primitive data types cannot be compared by value. Even if two non-primitve data types have the same properties and values, they are not strictly equal.

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) //false

let userOne = {
    name: 'Ashish'
    role: 'Forensics'
    country: 'India' 
} 

let userTwo = {
    name: 'Ashish'
    role: 'Forensics'
    country: 'India'
}

console.log(userOne == userTwo)  //false

Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions or objects. Non-primitive vakyes are reffered to as reference types, because they are being compared by reference instead of values. Two objects are only strictly equal if they refer to the same underlying object.

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true

Rest you can read from this repository. I don't think I would be able to copy and type more to increase my typing speed :'-)
https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md

# Numbers

Declaring Number Data types
 let age = 19
 const gravity = 9.81 // use const for non-changing values and similar stuff
 let mass = 72 
 const PI = 3.14

 //More Examples 
 const boilingPoint = 100 
 const bodyTemp = 37

 console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)


# MathObject
 
 In JS the math object provides a lot of methods to work with numbers
 
 const PI = Math.PI

 console.log(PI)