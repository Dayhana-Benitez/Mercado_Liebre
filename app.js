let express = require('express');
let app = express();
const PORT = 3000;
const path = require('path')


//middlewares

app.use(express.static('public'))


//routes

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"./views/home.html"))
})

app.get('/login.html',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
})

app.get('/register.html',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/register.html"))
})

//servers
app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))

