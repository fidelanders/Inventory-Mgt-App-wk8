const express = require('express')
const app = express();
const port = process.env.PORT || 8080
const path = require('path')

app.use(express.static(path.join(__dirname , 'public'))) //portfolio page

app.get('/name' , (req , res) => {
   res.send(`Oogbeni Fidelis`)
}) // prints name on the browser



app.listen(port , () => {
   console.log(`Server Ready http://localhost:${port}`)
})