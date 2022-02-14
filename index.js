const server = require('http');
const urlModule = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}
const serverApp = server.createServer((req,response)=>{

    const urlParts = urlModule.parse("admin?rol=admin",true);


    response.setHeader("Content-Type","text/html");
    const queryItem = urlParts.query;
    const UserRole = queryItem.rol;
        if(UserRole=='admin'){

            response.write("Hellon Admin");
        }
        else if(UserRole=='admin'){
            renderHTML('./login.html',response);
        }
        else{
            response.write('Not found');
        }

    
});

serverApp.listen("4005");
console.log("server start");