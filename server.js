const express = require('express')
const path = require('path')
const app = express()
app.set('port', process.env.PORT || 8000)
app.use(express.static(path.join(__dirname, './public')))
app.listen(app.get('port'),(req, res)=>{
    console.log(`server on port ${app.get('port')}`)
})