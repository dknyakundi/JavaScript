var http = require('http');
var url = require('url');

//creating a server object
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write(req.url); //write a response to the client

    //There are built-in modules to easily split the query string into readable parts, such as the URL module.


    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;

    res.end(txt); // end the response
}).listen(8080); //serve object listens to port 8080