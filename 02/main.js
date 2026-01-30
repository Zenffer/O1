const http = require('http');
const os = require('os');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url === '/'){
        res.end('<h1>Welcome to the Home Page</h1>'
        );
    }else if (req.url === '/about'){
        res.end(
            `<h1>about OS</h1>
            <p>Platform: ${os.platform}</p>
            <p>arch: ${os.arch}</p>
            <p>total mem: ${os.totalmem()}</p>
            <p>version: ${os.version}</p>`
        );
    }else if (req.url === '/profile'){
        fs.readFile("log.txt","utf8",(err,data)=>{
            if(err){
                res.end("<h1>Error reading file</h1>");
            }else{
                res.end(`<h1>Profile Page</h1><pre>${data}</pre>`);
            }
        });
    }else if (req.url === '/author'){
        res.end('<h1>Author Page</h1><p>This is the author page.</p>');
    }else{
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});