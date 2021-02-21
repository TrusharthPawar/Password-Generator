// string fuctions
let sentence = "I like web development"
let language = 'javaScript'
let txt = 'a,c,d,e'
console.log('length of string = ' + sentence.length)
console.log("index = " +sentence.indexOf('web'))
console.log("search = " + sentence.search('like'))
console.log('sub string = ' + sentence.substring(2,10))
console.log('slice string = ' + sentence.slice(2,6))
console.log("replace India = " + sentence.replace("India","maharashtra"))
console.log(" uppercase = " + sentence.toUpperCase())
console.log("concat = " + sentence.concat(' ' + language))
console.log("unicode = " + sentence.charCodeAt(),language.charCodeAt())


//array methods

//concat array 
let fruits = ['apple','banana','orange']
let  veggies = ['potato','briangle','tomato']
console.log(fruits.concat(veggies))

//array to string
console.log(fruits.toString())

//join all array to string 
console.log(fruits.join("*"))

//remove elements from array
//remove last element
// console.log(fruits.pop())

//add element to array
console.log(fruits.push('grapes'))
console.log(fruits)

//remove first element 
console.log(fruits.shift())
console.log(fruits)

//add element at first 
console.log(fruits.unshift('apple'))
console.log(fruits)

//change element in array
console.log(fruits[0] = 'mango')
console.log(fruits)

//constructor return function that created array object
console.log(fruits.constructor)

//foreach
console.log(fruits.forEach((fruits) =>{
    console.log(fruits)
}))

//oops in js
class Car {
    constructor(brand)
    {
        this.brand= brand
    }
    mycar = new Car("Ford")
    
}

console.trace()
console.warn("waring")
console.trace()

//Object

let Mobile = {
    Name:"Model", Model:2, Android_V:9};
console.log(Mobile)

//boolean
console.log('vlaue of empty string = '+ Boolean(''))
console.log(" value of integer = " + Boolean(1))
console.log('value of sting = ' + Boolean('hi'))
console.log('vlaue of zero = ' + Boolean(0))

//typeof 
let num = 10;
console.log(typeof num)

let number = [1,2,3,4]
console.log(typeof number)

//hoisting
x = 'javascript'
console.log(x) 
var x;