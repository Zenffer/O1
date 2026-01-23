//Importing the http module
const http=require("http");
//Creating an HTTP server
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello, Im Your Worst Nightmare\n");
});
//Server listening on port 3000
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000/");
});
