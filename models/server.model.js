const express = require("express");
var cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
    this.path = {
      calculos: "/calculos",
    };

    //Middlewares
    this.middlewares();

    //Rutas app
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.path.calculos, require("../routes/calculos.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Corriendo en ", this.port);
    });
  }
}

module.exports = Server;
