// modulos intenos

const express = require("express");
const router = express.Router();

//invocamos modulos creados

const {Usuario} = require("../model/usuario");

// ruta

router.post("/", async(req,res) => {

    // revisamos si existe el usuario

    let usuario = await Usuario.findOne({ correo: req.body.correo });
    //si el usuaario existe en BD
    if(usuario) return res.status(400).send("El usuario ya existe");
    // si el correo no existe 
    usuario = new Usuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        pass: req.body.pass,
    });

    //  guardamos el usuario se genera el JWT

    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({ jwtToken})

});

// exports
module.exports = router;
