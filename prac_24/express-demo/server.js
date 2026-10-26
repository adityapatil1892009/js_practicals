const express = require("express");

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next();
});

// a. Route
app.get("/", (req, res) => {
    res.send("Welcome to Express Web Server");
});

// b. Another route
app.get("/about", (req, res) => {
    res.send("This is the About page");
});

// c. Static files
app.use(express.static("public"));

// d. JSON response
app.get("/student", (req, res) => {
    res.json({
        id: 101,
        name: "Aditya",
        course: "Computer Engineering",
        year: 2
    });
});

// Start server
app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});