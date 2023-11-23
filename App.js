//configura el express
const express = require("express");
const app = express();

require('dotenv').config()

const port =  3000;

//conexion  a base de datos
const user = "duilio_ortega"
const password = "9bQ5rMSGtGjuMtMu"
const dbname= "Carretón"  
const uri = `mongodb+srv://${user}:${password}@atlascluster.hqxn42v.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const mongoose = require('mongoose');
mongoose.connect(uri) 
  .then(()=> console.log('Base de Datos conectada')) 
  .catch(e => console.log('error de conexión', e))
 
//configuramos los motores de plantilla
app.set('view engine','ejs');
//configuramos la carpeta  vistas 
app.set('views', __dirname +"/views");
 
// configurar de la carpeta estatica (public)
app.use(express.static(__dirname +"/public"));

//rutas     
app.use('/',require('./router/productos'));
app.use('/Productos',require('./router/productos'));

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "Carreton ULV"
    })
})

// para configurra el puerto
app.listen(port, () => {
  console.log('Servidor a su servicio en el puerto',port)
});