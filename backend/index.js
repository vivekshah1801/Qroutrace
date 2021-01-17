const express = require("express"); //for routing
const bodyParser = require("body-parser"); //For parsing the data which we will get from the frontend
const cors = require("cors"); //cross origin support
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.set("port", port);

const routes = require("./routes/api/index");
// app.use("/api", routes);

app.get('/',(req,res)=>{
    res.json({'status':'healthy'});
})

//We are running our application on server port : 5000
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});