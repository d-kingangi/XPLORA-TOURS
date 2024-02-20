import mssql from 'mssql';
import dotenv from 'dotenv';
import { sqlConfig } from '../Config/sqlconfig';
import ejs from 'ejs';
import { sendMail } from '../Helpers/emailhelpers';
dotenv.config()

export const confimBooking = async()=>{
    const pool = await mssql.connect(sqlConfig)

    const users = (await pool.request().query('SELECT * FROM bookings WHERE isConfirmed = 0')).recordset

    // console.log(users);

    for(let user of users){
        ejs.renderFile('Templates/confirmbooking.ejs', {CustomerName: user.firstname}, async(error, data)=> {
            let mailOptions = {
                from : "itsronduncan@gmail.com",
                to: user.email, 
                subject: "Booked Tour",
                html: data
            } 
            
            try {
                await sendMail(mailOptions)

                await pool.request().query('UPDATE bookings SET isConfirmed = 1')
            } catch (error) {
                console.log(error);
                
            }
        })
    }
}