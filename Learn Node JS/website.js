const http = require("http");
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    
    res.statusCode = 200;
    
    res.setHeader('Content-Type','text/html');
    if(req.url == "/"){ 
        
        res.statusCode = 200;
        const a = fs.readFileSync("index.html");
        res.end(a.toString());
}
else if(req.url == "/about"){
    res.statusCode = 200;
    res.end(`<h1>About</h1>
    <p>Welcome to about page</p>`);
}
else{
    res.statusCode = 404;
    res.end(`<h1>Not Fount</h1>
    <p>Error 404</p>`);
}
  
   
})
server.listen(port,()=>{
    console.log(`server is listening on port${port}`);
})