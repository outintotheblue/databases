'use strict';

const express = require('express');
const mysql = require('mysql'); 
const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    
})
const http = require('http');
const port = 3000; 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hi Anton')
})


server.listen(port, () => {
    console.log(`Server ruuuunning at ${port}`)
})