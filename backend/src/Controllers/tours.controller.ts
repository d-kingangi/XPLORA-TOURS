import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid'
import {tour} from "../Interfaces/tours";
import { sqlConfig } from "../Config/sql.config";

export const createtour = async(req: Request, res: Response)=>{
    try{
        const id = v4()

        const {destination, price, startDate, endDate, content}:tour = req.body

        const newtour = {tourId: id, destination, price, startDate, endDate, content}

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("tourId", mssql.VarChar, id)
        .input("destination", mssql.VarChar, destination)
        .input("price", mssql.VarChar, price)
        .input("startDate", mssql.VarChar, startDate)
        .input("endDate", mssql.VarChar, endDate)
        .input("content", mssql.VarChar, content)
        .execute('createtour')).rowsAffected

        console.log(result);

        return res.json({
            message: "Tour created Successfully"
        })
    }catch(error){
        return res.json({error: error})
    }
} 

export const getalltours =async (req:Request, res:Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let alltours = (await pool.request().execute('getalltours')).recordset

        return res.status(200).json({
            tours: alltours
        })
    } catch (error) {
        return res.json({error})
    }  
}

export const getdeletedtours =async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let alltours = (await pool.request().execute('getdeletedtours')).recordset

        return res.status(200).json({
            tours: alltours
        })
    } catch (error) {
        return res.json({error})
    } 
}

export const getonetour = async (req:Request, res:Response) => {
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let tours = (await pool.request().input("tourId", id).execute('getonetour')).recordset

        return res.json({
            tours
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updatetour =async (req:Request, res:Response) => {
    try {
        const id = req.params.id

        const{destination, price, startDate, endDate, content}: tour = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("tourId", id)
        .input("destination", mssql.VarChar, destination)
        .input("price", mssql.VarChar, price)
        .input("startDate", mssql.VarChar, startDate)
        .input("endDate", mssql.VarChar, endDate) 
        .input("content", mssql.VarChar, content)
        .execute('updatetour')).rowsAffected

        console.log(result)

        return res.status(200).json({
            message: "Project Updated successfully"
        })
    } catch(error){
        return res.json({error})
    }
}

export const deletetour =async (req:Request, res:Response)=>{
    try{
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input('tourId', mssql.VarChar, id)
        .execute('deletetour')).rowsAffected

        console.log(result[0]);

        if(result[0] == 0){
            return res.status(201).json({
                error: "Tour not found"
            })
        }else{
            return res.status(200).json({
                message: "Tour Deleted Succesfully"
            })
        }   
    } catch(error){
        return res.json({error})
    }
    
}