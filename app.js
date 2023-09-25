// console.log("hello world")
// console.log(1+2)

// const a=10;
// const b=10;
// const names="Manish"
// const sum = a+b

// console.log(sum);

// // array
// const numbers = [10,20,30]
// console.log(numbers[0])
// console.log(numbers.length)

// // objects
// const person = {
//     name : "Manish",
//     age : "12"
// }

// console.log("This person's name is" + person.name + " and his age is " + person.age)

// DAY 2 -------------------------------------------------------------------------------------------------

const app = require("express")()

// ALTERNATIVE tala ko duita ekai tali lekhna paryo.. mathi ko alternative
// const express = require("express")
// const app = express()

// req-request, res-response
app.get("/", (req,res)=>{
    // console.log(req)
    // res.send("<h1>Hello I'm home page</h1>")
    res.json({
        message: "I am from home page"
    })
})

app.get("/contact", (req,res)=>{
    res.send("This is the contact page")
})

app.get("/about", (req,res)=>{
    console.log("This is the about page")
})

// 3000 port ko room chai use gar yo project run garna lai.. aru port ni rakhna paiyo
// Node ma explicitly(afaile vannu paryo) yo port ma run ho vanera
app.listen(3000, (req,res)=>{
    console.log("Nodejs has started at port 3000")
})