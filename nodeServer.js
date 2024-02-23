// Importation du module HTTP de Node.js
const http = require('http');

// Création du serveur
const server = http.createServer(
    (Request, Response) => {
        // Si l'URL de la requête est "/" ou "/home" et que la méthode de la requête est "GET"
        if ((Request.url === "/" || Request.url === "/home") && Request.method === "GET") {
            // On définit le type de contenu de la réponse comme étant du HTML
            Response.setHeader("content-type", "text/html");
            // On écrit dans le corps de la réponse un message en HTML
            Response.write("<meta charset='utf8'><h1>Vous êtes sur la homepage</h1>");
            // On termine la réponse
            Response.end();
        } else {
            // Si l'URL de la requête n'est pas "/" ou "/home", on définit le type de contenu de la réponse comme étant du HTML
            Response.setHeader("content-type", "text/html", "meta", "utf8");
            // On écrit dans le corps de la réponse un message d'erreur en HTML
            Response.write("Erreur 404 : page non valide");
            // On termine la réponse
            Response.end();
        }
    }
);

// Le serveur écoute sur le port 3000 et l'adresse "localhost"
server.listen(3000, "localhost", () => {
    // Un message est affiché dans la console lorsque le serveur commence à écouter
    console.log("server listening on port 3000");
});