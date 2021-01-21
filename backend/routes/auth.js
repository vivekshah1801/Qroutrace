const router = require('express').Router();

router.post('/register',(req,res)=>{
    res.send("register user");
})

router.post('/login', (req, res)=>{
    res.send("Login")
})

router.post('/update/:userid', (req,res)=>{
    res.send("Update");
})

module.exports = router;