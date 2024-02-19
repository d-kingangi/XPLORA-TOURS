import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid'
import {review} from "../Interfaces/reviews";
import { sqlConfig } from "../Config/sql.config";

export const createreview = async(req: Request, res: Response)=>{
    try{
        const id = v4()

        const {userId, tourId, rating, comment}:review = req.body

        const newreview = {reviewId: id, userId, tourId, rating, comment}

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("reviewId", mssql.VarChar, id)
        .input("userId", mssql.VarChar, userId)
        .input("tourId", mssql.VarChar, tourId)
        .input("rating", mssql.VarChar, rating)
        .input("comment", mssql.VarChar, comment)
        .execute('createreview')).rowsAffected

        console.log(result);

        return res.json({
            message: "Review posted Successfully"
        })
    }catch(error){
        return res.json({error: error})
    }
}

export const getallreviews =async (req:Request, res:Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let allreviews = (await pool.request().execute('getallreview')).recordset

        return res.status(200).json({
            projects: allreviews
        })
    } catch (error) {
        return res.json({error})
    }  
}

export const deletereview =async (req:Request, res:Response)=>{
    try{
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input('reviewId', mssql.VarChar, id)
        .execute('deletereview')).rowsAffected

        console.log(result[0]);

        if(result[0] == 0){
            return res.status(201).json({
                error: "Review not found"
            })
        }else{
            return res.status(200).json({
                message: "Review Deleted Succesfully"
            })
        }   
    } catch(error){
        return res.json({error})
    }   
}