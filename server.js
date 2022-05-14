const express = require('express')
const fs = require('fs')
const path = require('path')

const PORT = 3002
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static('public'))



app.get('/notes', (req,res) =>
res.send(path.join(__dirname, '/public/notes.html')))

app.get('*', (req,res) => 
res.send(path.join(__dirname, '/public/index.html')))

app.listen(PORT, () => console.log(`app is listening on http://localhost:${PORT}`) )
