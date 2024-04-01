const Joi = require("joi");
const bcrypt = require("bcrypt");
const { userServices } = require("../../services/user");
const { createUser, findUser } = userServices;
const { createHash ,compareHash} = require("../../../utils");
class userController {
    async createUser(req, res, next) {
        const validSchema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            role: Joi.string().required(),
            Email: Joi.string().optional(),
        })
        try {
            const { value } = validSchema.validate(req.body);
            const userRes = await findUser({ email: value.email });
            if (userRes) {
                return res.status(401).json({ responseMessage: "Email already Exist", statusCode: 401 });
            }
            // const salt = 10;
            const hashedPass = await createHash(value.password);
            value.password = hashedPass;
            const result = await createUser(value);
            return res.status(201).json({ result, responseMessage: "User Created sucessfull!", statusCode: 201 })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    async loginUser(req, res, next) {
        const validationSchema = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        });
        try {
            console.log(req.body);
            const { value } = validationSchema.validate(req.body);
            console.log(value)
            const userRes = await findUser({ email: value.email });
            console.log(userRes);
            if (!userRes) {
                return res.status(409).json({ responseMessage: "User Not exist", statusCode: 409 })
            }
            // const passcheck = await compareHash(userRes.password, value.password);
            // if (!passcheck) {
            //     return res.status(509).json({ responseMessage: "Incorrect password please Enter correct password", statusCode: 509 })
            // }
            return res.status(200).json({ userRes, responseMessage: "User logged succefully", statusCode: 200 });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    async finduserList(req,res,next){
        
    }
}

module.exports = new userController();