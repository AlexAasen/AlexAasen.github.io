const express = require('express')
const app = express()
const path = require('path')

app.use('/src/build', express.static('src/build'))
app.use('/src/client', express.static('src/client'))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(8040)
