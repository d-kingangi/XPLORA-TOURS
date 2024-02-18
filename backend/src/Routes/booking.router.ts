import { Router } from "express";
import { createbooking, deletebooking, getonebooking, getallbookings, updatebooking } from "../Controllers/bookings.controller";
import { verifyToken } from "../Middlewares/verifyTokens";

const bookingRouter = Router()

bookingRouter.post('/', createbooking)
bookingRouter.get('/', verifyToken, getallbookings)
bookingRouter.get('/', verifyToken, getonebooking)
bookingRouter.purge('/update/:id', verifyToken, updatebooking)
bookingRouter.delete('/delete/:id', verifyToken, deletebooking)

export default bookingRouter