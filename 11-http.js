const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to our home page")

    }
    if(req.url==='/about'){
        res.end("here is our short description")
       // res.end()
    }
    res.end(`<h1>Oops!</h1> <p>We cant seem to find the page</p>
    <a href ="/">back home</a>`)

    // console.log(req);
    // res.write("Welcome to our page")
    // res.end()
})
server.listen(5000)