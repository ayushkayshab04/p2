const conn = require("../connection/database.connection")


const getEmployee = async()=>{
    const conn =  await conn;
    const query = `select * from project.employee`;
    
    const { rows} = conn.query(query)
    return rows
}




module.exports = {
    getEmployee,
}