const router = require('express').Router();

router.post('/add',(req,res)=>{
    res.send("add visit");
})

router.post('/delete', (req, res)=>{
    res.send("delete visit")
})

router.post('/show/:userid', (req,res)=>{
    res.send("visits for userid");
})

module.exports = router;