const express = require('express');
const App = express();
const PORT = 3000;

App.use(express.json());

App.get('/', (req,res) => {
    res.status("Welcome to Signup Page!");
});

App.post('/signup', (req,res) => {
    const {username, email, password} = req.body;

    if(!username){
        res.status(400).send('Username cannot be empty');
    }
    if(!email){
        res.status(400).send('Email cannot be empty');
    }
    if(password.length > 8 && password.length <=16){
        res.status(200).send('Password length must be atleast 8 to less than or equal to 16');
    }

    res.send('Signin Successful');
});

App.listen(PORT,() => {
    console.log(`server is running at port:http://localhost:${PORT}`)    
});
