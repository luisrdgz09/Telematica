//Importe los módulos requeridos
const express = require("express");
const app = express();
const puerto = 5000;
//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname + "/public"));
//Atención de la solicitud
app.get('/', (req,res)=>{
    res.render("index", {Variable:"Este es el contenido de una variable."})
});
//
app.get('/bformulario', (req,res)=>{
    res.render("Formulario", {Variable:"Este es el contenido de una variable."})
});
//
app.get('/bInicio', (req,res)=>{
    res.render("index", {Variable:"Este es el contenido de una variable."})
});

app.listen(puerto, () => {
    console.log("Ejecutando servidor");
});

