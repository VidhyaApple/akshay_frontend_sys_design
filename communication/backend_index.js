const express = require('express');

const app = express();
const PORT  = 5111 || process.env.PORT ;
let data = "Initial data"

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');

})
app.get('/getData',(req,res) => {
    res.send({data})
})

app.get('/updateData',(req,res) =>{
    data = "updated data"
    res.send({
        message: "updated successfully"
    })
})





app.listen(PORT,() => {
    console.log(`Express server is running at ${PORT}`)
});