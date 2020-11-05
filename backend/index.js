// modulos internos

const express = require("express");
const mongoose = require("mongoose");

// modulos creadeos

const usuario = require("./routes/usuario");
const auth = require("./routes/auth")  // traemos nuestro modulo creado 

const album = require("./routes/album"); 

//App

const app = express();

app.use(express.json());
app.use("/api/usuario/",usuario);
app.use("/api/auth/",auth); // ruta de autenticacion 
app.use("/api/album/",album);

// puerto de ejecucion

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(" Ejecutando en puerto ", port));

// registro mongo
mongoose
  .connect("mongodb://localhost/albumdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion con mongo OK"))
  .catch((error) => console.log("Conexion con mongo OFF"));
