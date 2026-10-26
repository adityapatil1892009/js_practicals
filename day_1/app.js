// console.log("hello");
// console.log(process.cwd())

//broadcasting 
// const EventEmitter = require('events');
// const event = new EventEmitter();
// event.on("message",()=>{
//     console.log("hellooooooooo")
// })
// event.emit("message");
// console.log(event);

//listening

// const EventEmitter = require('events');
// const event = new EventEmitter();
// event.on("message",(name)=>{
//     console.log(`hello ${name}`);
// })
// event.emit("message","aditya");

// setTimeout(()=>{
//     console.log("helllo my friends");
// },3000);

//event loop

// console.log("hello");
// setTimeout(()=>{
//     console.log("my self aditya");
// },0)
// Promise.resolve().then(()=>{
//     console.log("my self aditya patil.");
// })
// console.log("bye bye");

// e. Callback and error handling
function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error("Cannot divide by zero"));
    } else {
        callback(null, a / b);
    }
}

divide(10, 2, (error, result) => {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Result:", result);
    }
});

divide(10, 0, (error, result) => {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Result:", result);
    }
});

console.log("Program execution completed");