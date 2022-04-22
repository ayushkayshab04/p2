const route = require("./employee/index")
const express = require("express")
const app = express();
const port = process.env.PORT||3000;


app.use(express.json());


app.use("/employee",route.employeeRoute);




app.listen(port,()=>{
console.log(`Server started on port ${port}`)
})