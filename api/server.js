require('dotenv').config()
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const v2Router= require("./v2/routes/taskRoutes")
const port = process.env.PORT;

//** THIS IS RUNNIG IN MENV DOCKER-COMPOSE , DONT FORGET! */

const app = express();

//app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

app.use("/api/v2/tasks",v2Router) 



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})