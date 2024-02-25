import mssql from 'mssql';
import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import {v4} from 'uuid';
import {user} from "../Interfaces/users";
import { sqlConfig } from "../Config/sql.config";
import { registerUserSchema } from '../Validators/user.validator';


export const createUser = async(req: Request, res: Response)=>{
    try{
        const id = v4()

        const {firstname, lastname, email, content, password}:user = req.body

        const hashed_pwd = await bcrypt.hash(password, 3)

        let {error} = registerUserSchema.validate(req.body)

        if(error){
            return res.status(400).json({
                error: error
            })
        }
        const pool = await mssql.connect(sqlConfig)

        let result = await(await pool.request()
        .input("userId", mssql.VarChar, id)
        .input("firstname", mssql.VarChar, firstname)
        .input("lastname", mssql.VarChar, lastname)
        .input("email", mssql.VarChar, email)
        .input("content", mssql.VarChar, content)
        .input("password", mssql.VarChar, hashed_pwd)
        .execute('createuser')).rowsAffected

        return res.json({
            message:"Account created successfully",
        })
    } catch(error) {
        return res.status(500).json({error: error})
    }
}

export const getUsers =  async(req: Request, res:Response)=>{
    try {
        
        const pool = await mssql.connect(sqlConfig);
        let allusers = (await pool.request().execute('getallusers')).recordset

        return res.status(200).json({
            users: allusers
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getOneUser = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let user = (await pool.request().input("userId", id).execute('getoneuser')).recordset

        return res.json({
            user
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updateUser = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const {firstname, lastname, email, content, password}:user = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("userId", id)
        .input("firstname", mssql.VarChar, firstname)
        .input("lastname", mssql.VarChar, lastname)
        .input("email", mssql.VarChar, email)
        .input("content", mssql.VarChar, content)
        .input("password", mssql.VarChar, password)
        .execute('updateuser')).rowsAffected

        console.log(result);
        

        return res.status(200).json({
            message: "User updated successfully"
        })
    } catch (error) {
        return res.json({error})
    }
}

export const deleteUser = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("userId", mssql.VarChar, id)
        .execute('deleteuser')
        ).rowsAffected

        console.log(result[0]);
        
        if(result[0] == 0){
            return res.status(201).json({
                error: "User not found"
            })
        }else{
            return res.status(200).json({
                message: "Account deleted successfully"
            })
        }   
    } catch (error) {
        return res.json({error})
    }
}

