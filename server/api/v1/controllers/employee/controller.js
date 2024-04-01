const Joi = require("joi");
const { employeeServices } = require("../../services/employe");
const { createEmployee, findEmployeeList } = employeeServices;;


class Emplontroller {
    async creteEmpoyee(req, res, next) {
        try {
            const value = req.body;
            const result = await createEmployee(value); 
            return res.status(201).json({ result, responseMessage: "Employe details save", statusCode: 201 });
        } catch (error) {
            next(error);
        }
    }
    async findUserList(req, res, next) {
        try {
            const userList = await findEmployeeList();
            return res.status(200).json({ userList, statusCode: 200 });
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new Emplontroller();