const { log } = require("console");
const http = require("http");

//req = request  -> peticion del cliente
//res = response -> respuesta del servidor
//cliente = navegador

const server = http.createServer((request, response) => {
  console.log("Un cliente se a conectado");

  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.write("La conexion ha sido correcta, David Rivera Castañon.");
  response.end();
});

server.listen(3000, () => {
  console.log("Servidor a la escucha y espera de conexiones.");
});
