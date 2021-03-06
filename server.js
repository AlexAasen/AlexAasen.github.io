const express = require('express')
const app = express()
const path = require('path')

app.use('/build', express.static('build'))
app.use('/src', express.static('src'))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(8040)
