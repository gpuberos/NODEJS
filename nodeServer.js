const http = require('http');

// Create Server
const server = http.createServer(
    (Request, Response)=>{
        if ((Request.url === "/" || Request.url === "/home") && Request.method === "GET") {
            Response.setHeader("content-type", "text/html");
            Response.write("<meta charset='utf8'><h1>Vous êtes sur la homepage</h1>");
            Response.end();
        } else {
            Response.setHeader("content-type", "text/html", "meta", "utf8");
            Response.write("Erreur 404 : page non valide");
            Response.end();
        }
    }
);

// Server Listening
server.listen(3000, "localhost", () => {
    console.log("server listening on port 3000");
});