const employeeService = require("./employee.service");
const employeeRoute = require("./employee.routes");
const employeeController = require("./employee.controller");


module.exports = {
    employeeRoute,
    employeeService,
    employeeController
}