let express = require('express');
let app = express();
let path = require('path');
let PORT = 3020;


app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/view', express.static(__dirname + '/view'));
app.use('/script.js', express.static(__dirname + '/script.js'));
app.use('/downloads', express.static(__dirname + '/downloads'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/info.txt', express.static(__dirname + '/info.txt'));
app.use('/src', express.static(__dirname + '/src'));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/vladimir', (req,res) => {
    res.end("\n\n\n\nDados blz")
})
app.listen(PORT, () => {
    console.log("\n\nServidor em ação !\n\n\n" + "  NA PORTA => " + PORT);
})
