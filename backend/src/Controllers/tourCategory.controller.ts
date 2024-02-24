import mssql from 'mssql';
import { Request, Response } from "express";
import { v4 } from 'uuid';
import { tourCategory } from "../Interfaces/tourCategory";
import { sqlConfig } from "../Config/sql.config";

export const createtourCategory = async (req: Request, res: Response) => {
    try {
        const id = v4();
        const { categoryName, categoryDescr }: tourCategory = req.body; // Extract values from the request body

        const newtourCategory = { categoryId: id, categoryName, categoryDescr };

        const pool = await mssql.connect(sqlConfig);

        // Use input parameters in the query
        let result = (await pool.request()
            .input("categoryId", mssql.VarChar, id)
            .input("categoryName", mssql.VarChar, categoryName)
            .input("categoryDescr", mssql.VarChar, categoryDescr)
            .execute('createtourCategory')).rowsAffected;

        console.log(result);

        return res.json({
            message: "Tour Category created Successfully"
        });

    } catch (error) {
        return res.json({ error}); 
    }
};

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let alltourCategories = (await pool.request().execute('getAllCategories')).recordset; // Fix variable name

        return res.status(200).json({
            tourCategories: alltourCategories 
        });
    } catch (error) {
        return res.json({ error }); 
    }
};
