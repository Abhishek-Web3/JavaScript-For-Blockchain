const express = require('express');
const app = express();

const PORT  = 3000;

// app.get('/', (req, res) => {
//     const {username} = req.query;

//     console.log("Client is requesting");
//     console.log('hello');
//     res.send(`Hi ${username}`);
// })

/*app.use( (req, res, next)=> {
   console.log("middle ware - 1");
   next();
})
app.use( (req, res, next)=> {
    console.log("middle ware - 2");
    next();
 })
 app.use( (req, res, next)=> {
    console.log("middle ware - 3");
    next();
 })
 app.use( (req, res)=> {
    console.log("middle ware - 4");
 })*/

    app.use(express.json())

    app.post('/user', (req,res) => {
        const {userName, passWord} = req.body;
        console.log(`userName:${userName}, passWord: ${passWord}`);
    })
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});