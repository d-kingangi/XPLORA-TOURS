import joi from 'joi';

export const registerUserSchema = joi.object({
    firstname: joi.string().min(3).required(),
    lastname: joi.string().min(3).required(),
    email: joi.string().email().required(),
    content: joi.string(),
    password: joi.string().required()
})