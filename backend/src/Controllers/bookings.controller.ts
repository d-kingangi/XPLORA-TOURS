import mssql, { VarChar } from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid'
import {booking} from "../Interfaces/bookings";
import { sqlConfig } from "../Config/sql.config";
import { ExtendedUserRequest } from '../Middlewares/verifyTokens';

export const createbooking = async(req: ExtendedUserRequest, res: Response)=>{
    try {
        const id = v4()

        const {userId, tourId, bookingDate}: booking = req.body

        const newbooking = {bookingId: id, userId, tourId, bookingDate}

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("bookingId", VarChar, id)
        .input("userId", mssql.VarChar, userId)
        .input("tourId", mssql.VarChar, VarChar)
        .input("bookingDate", mssql.DateTime, bookingDate)
        .execute('createbooking')).rowsAffected

        console.log(result);

        return res.json({
            message: "Tour created Successfully"
        })
    } catch (error) {
        return res.json({error: error})
    }
}

export const getallbookings =async (req:Request, res:Response) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        let allbookings = (await pool.request().execute('getallbooking')).recordset

        return res.status(200).json({
            projects: allbookings
        })
    } catch (error) {
        return res.json({error})    
    }    
}

export const getonebooking =async (req:Request, res: Response) => {
    try{
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let project = (await pool.request().input("bookingId", id).execute('getonetour')).recordset

        return res.json({
            project
        })
    }catch(error){
        return res.json({error})
    }
}

export const updatebooking =async (req:Request, res:Response) => {
    try{
        const id = req.params.id

        const {userId, tourId, bookingDate}: booking = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("bookingId", id)
        .input("userId", mssql.VarChar, userId)
        .input("tourId", mssql.VarChar, tourId)
        .input("bookingDate", mssql.DateTime, tourId)
        .execute('updatebooking')).rowsAffected

        console.log(result)

        return res.status(200).json({
            message: "Project Updated successfully"
        })
    }catch(error){
        return res.json({error})
    }   
}

export const deletebooking =async (req:Request, res:Response) => {
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input('bookingId', mssql.VarChar, id)
        .execute('deletebooking')).rowsAffected

        console.log(result[0]);

        if(result[0] == 0){
            return res.status(201).json({
                error: "Booking not found"
            })
        }else{
            return res.status(200).json({
                message: "Booking Deleted Succesfully"
            })
        }
    } catch (error) {
        return res.json({error})
    }
}