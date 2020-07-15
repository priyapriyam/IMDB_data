const express = require('express')
let app = express()
app.use(express.json())

require('./routes/apis')(app)

app.listen(8000,() =>{
    console.log("connection done with server 8000")
})

