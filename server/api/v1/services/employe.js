const employeeModel = require("../../../models/empolye");

const employeeServices = {
    createEmployee: async (insertObj) => {
        return await employeeModel.create(insertObj);
    },
    findEmployee: async (query) => {
        return await employeeModel.findOne(query);
    },
    findEmployeeList: async () => {
        return await employeeModel.find();
    }
}

module.exports = { employeeServices };