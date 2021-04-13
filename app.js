var http = require("http");

var express = require("express");
var apiServer = express();

var port = 3000;
apiServer.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
});

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    console.log("ho ricevuto una get su nome");
    res.send("ciao, il nome del server è: NODEPOGLIANI");



});


apiServer.get("/voti", (req, res) => {
    for(var i=0;i<3;i++){
        for(var i=0;i<3;i++){
    console.log("voti " , req.query[i][i]);
        }
    }
});

apiServer.get("/", function(req, res){
    res.send("sei in home");
});