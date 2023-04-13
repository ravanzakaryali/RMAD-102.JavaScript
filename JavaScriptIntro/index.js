"use strict"
const Test = () => console.log(this);
Test();


function Car() {
    console.log(this);
}
Car();

let obh = Object.create({
    name: "Ravan"
})
console.log(obh.name)