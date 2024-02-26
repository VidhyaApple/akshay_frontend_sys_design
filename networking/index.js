import express from 'express';

const app = express();


app.all('/',(req,res) => {
    console.log(`req value`,req);
    console.log(`res value`,res);
    res.send('It is first application request')

})



const PORT = 5111;
app.listen(PORT,() => {
    console.log(`Express is running at PORT ${PORT}`)
})