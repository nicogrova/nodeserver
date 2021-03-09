var http = require("http");

var express = require("express");
var apiServer = express();

var port = 3000;

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    console.log("ho ricevuto una get su nome");
    res.send("ciao, il nome del server è: NODEPOGLIANI");
if(req.query.a && req.query.b){
    var ris = req.query.a - (-req.query.b);
console.log("ris = " , ris);
res.send("{ \"risultato\" : " + ris + "}");

}else{
    res.send("sei in home");
}
});


apiServer.get("/somma", (req, res) => {
    console.log("richiesta: " , req.query);
});

apiServer.get("/", function(req, res){
    res.send("sei in home");
});