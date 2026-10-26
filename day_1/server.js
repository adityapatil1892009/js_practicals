const http = require("http")

const server = http.createServer((req,res)=>{
console.log(req.method);
console.log(req.headers);
if (req.method == "GET"){
    res.writeHead(200, {
            "Content-Type": "text/plain"
        });
    res.write("Hellooo");
    res.end();
}
})

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
});
