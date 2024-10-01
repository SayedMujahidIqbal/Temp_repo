//////////////// Object Methods and this //////////////
/////////////// Assigning Method to an object by defining properties that are functions /////////

const arto = {
    name: "Mujahid Iqbal",
    age: 35,
    education: 'PhD',
    greet: function(){
        console.log("hello, my name is " + this.name)
    },
    doAddition: function(a, b){
        console.log(a + b)
    },
}
arto.greet() /// "Hello, my name is Mujahid Iqbal" gets printed

//////// Methods can be assigned t objects even after the creation of the object /////////////
const arto2 = {
    name: 'Asad Iqbal',
    age: 35,
    education: 'Mphil',
    greet: function(){
        console.log('Hello, my name is ' + this.name)
    },
}

arto2.growOlder = function(){
    this.age += 1
}

console.log(arto2.age) // 35 is printed
arto2.growOlder()
console.log(arto2.age) // 36 is printed

arto.doAddition(5, 10) // 15 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15) // 25 is printed

////// If we reference to greet method we run into issue with undefined this.name variable, by reference calling this loses its track, to preserve the original this, we use bind mechanisms ////////////
setTimeout(arto.greet, 1000) // will print undefined because this has loses its track to the original value
setTimeout(arto.greet.bind(arto), 1000) // this will print its original value.

//////////////////////// Classes ////////////////////////////
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log('Hello, my name is ' + this.name)
    }
}

const mujahid = new Person('Mujahid iqbal', 30)
mujahid.greet()

const asad = new Person('Asad Iqbal', 23)
asad.greet();