require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/mongo')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

//rutas
app.use("/api", require('./routes/form.js'))
app.use("/api", require('./routes/auth'))


app.listen(port, () =>{
    console.log(`app http://localhost:${port}`);
})

dbConnect()

