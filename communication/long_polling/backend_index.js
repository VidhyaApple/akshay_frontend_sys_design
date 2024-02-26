const express = require('express');

const app = express();
const PORT  = 5111 || process.env.PORT ;
let data = "Initial data"
let waitingClients = [];
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');

})
app.get('/getData',(req,res) => {
    let lastData = req.params.lastData;
    if (data ===  lastData ){
        res.json({data});
        return;
    } 
    waitingClients.push(res);

})

app.get('/updateData',(req,res) =>{
    data =  req.params?.data || 'updated data';
    while(waitingClients.length > 0){
        let client = waitingClients.pop();
        client.json({data})
    }
    res.send({
        message: "updated successfully"
    })
})





app.listen(PORT,() => {
    console.log(`Express server is running at ${PORT}`)
});