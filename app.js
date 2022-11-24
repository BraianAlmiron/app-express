const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views','home.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'views','registro.html')));
app.get('/detail',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/carrito',(req,res) => res.sendFile(path.join(__dirname,'views','carrito.html')));
app.get('*',(req,res) => res.send('NO SE ENCUENTRA LA RUTA :('));


app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))

