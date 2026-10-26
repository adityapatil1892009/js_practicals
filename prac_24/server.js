const http = require("http");
const fs = require("fs");

// a. Exporting Streams
const readableStream = fs.createReadStream("data.txt");

// b. Creating an HTTP Server
const server = http.createServer((req, res) => {

    // c. The Request Object
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);

    // d. Working with Headers
    console.log("Request Headers:", req.headers);

    if (req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.write("Data streamed from Node.js server\n\n");

        // Streaming data to client
        readableStream.pipe(res);

    } 
    else if (req.method === "POST") {

        // e. Handling POST Data
        let postData = "";

        req.on("data", (chunk) => {
            postData += chunk;
        });

        req.on("end", () => {
            console.log("POST Data:", postData);

            res.writeHead(200, {
                "Content-Type": "text/plain"
            });

            res.end("POST data received successfully: " + postData);
        });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});