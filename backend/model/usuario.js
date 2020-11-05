//  modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Esquema

const esquemaUsuario = new mongoose.Schema({
  nombre: {
    type: String,
  },
  correo: {
    type: String,
  },
  pass:{
      type:String,
  },

});

// generamos el JWT

esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
        _id: this.id,
        nombre:this.nombre,
        correo:this.correo,
    },"clave")
};

// creamos los exports 
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario
module.exports.esquemaUsuario = esquemaUsuario;
