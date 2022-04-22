const express = require("express")
const controller  = require("./employee.controller")

const router =  express.Router()

router.get("/getEmployee",controller.getEmployee)


module.exports = router;