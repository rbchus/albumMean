// modulos de node

const jwt = require("jsonwebtoken");

// crear la funcion meddleware

function auth (req, res, next) {

 let jwtToken = req.header("Authorization");

 // separo el Bearer del token  
 //Bearer.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlhYmY0YmVmMWFkYzQzMDRmOWQ0MTQiLCJub21icmUiOiJqZXN1cyIsImNvcnJlbyI6InJiY2h1c0BnbWFpbC5jb20iLCJpYXQiOjE2MDM5NzcwNzB9.l-RE4mCmoCMAzTbpn6Qtjfxf9FFKzuNEWQAbMFQpH2w

 jwtToken = jwtToken.split(" ")[1];

 //si no exist el token 
 if(!jwtToken) return res.status(401).send("no hay token para validar")

 //s existe el jwt

 try {
     const payload = jwt.verify(jwtToken, "clave");
     req.usuario = payload;
     next();
 } catch (error) {
      res.status(401).send("Token no valido, sin autorizacion a procesos");
 }
}

module.exports = auth;