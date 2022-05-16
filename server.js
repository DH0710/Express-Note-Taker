const express = require('express')
const fs = require('fs')
const path = require('path')
const dbjson = require('./db/db.json')
const PORT = 3002
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static('public'))



app.get('/notes', (req,res) =>
res.sendFile(path.join(__dirname, '/public/notes.html')))

app.get('/api/notes', (req,res) => {
res.json(dbjson)})

app.post('/api/notes', (req,res) => {
    const {text,title} = req.body
    if (text && title) {
        const newNote = {
            text, 
            title, 
        };
        fs.readFile('./db/db.json', 'utf8', (err,data) => {
            if (err) {
                console.log(err);
            }else {
            const parseNotes = JSON.parse(data);
            parsedNotes.push(newNote);

            fs.writeFile('/db/db.json',JSON.stringify(parsedNotes));
            
            }
            
        }); 
        res.json(dbjson.push(newNote))
    }


    
})


app.get('*', (req,res) => 
res.sendFile(path.join(__dirname, 'public/index.html')))



app.listen(PORT, () => console.log(`app is listening on http://localhost:${PORT}`) )

