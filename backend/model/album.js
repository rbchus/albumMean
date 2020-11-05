//  modulos internos

const mongoose = require("mongoose");

// Esquema

const esquemaAlbum = new mongoose.Schema({
  idUsuario: String,
  nombre: String,
  imagen: String,
});

// creamos los exports
const Album = mongoose.model("album", esquemaAlbum);

module.exports = Album


