const employeeService = require("./employee.service")


const getEmployee = async(req,res,next) =>{
try {
    const result = await employeeService.getEmployee;
    res.send(result)

    }catch(err){
        res.send(err).status(500)
    }
}


module.exports ={
    getEmployee,
}