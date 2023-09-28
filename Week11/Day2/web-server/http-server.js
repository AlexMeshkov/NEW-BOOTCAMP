const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('<h1>Home</h1>');
});

app.get('/about', (req, res)=>{
    res.send('<h1>About</h1>');
});

app.get("*", (req, res)=>{
    res.send('<h1>404</h1>');
});

app.listen(3001,()=>{
    console.log("run port on 3001");
})