require('dotenv').config()
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const v2TaskRouter= require("./v2/routes/taskRoutes")
const v2UserRouter= require("./v2/routes/userRoutes")
const v2RoleRouter= require("./v2/routes/roleRouter")
const { connectToDB }= require("./v2/database/dbConfig")

connectToDB()

const port = process.env.PORT;

//** THIS IS RUNNIG IN MENV DOCKER-COMPOSE , DONT FORGET! */

const app = express();

app.use(bodyParser.json());

app.use("/api/v2/tasks",v2TaskRouter)
app.use("/api/v2/users",v2UserRouter)
app.use("/api/v2/roles",v2RoleRouter) 



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}  http://localhost:3080/api/v2/tasks   `);
})