const EventEmitter = require("events");

const emitter = new EventEmitter();

// b. Listening for an event
emitter.on("message", (data) => {
    console.log("Event received:", data);
});

// a. Broadcasting an event
console.log("Broadcasting event...");
emitter.emit("message", "Hello from Node.js EventEmitter");

// c. Timer
setTimeout(() => {
    console.log("Timer executed after 2 seconds");
}, 2000);

// d. Event Loop
console.log("Event loop demonstration started");

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