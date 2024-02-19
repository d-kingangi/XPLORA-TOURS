import { Router } from "express";
import { createtour, deletetour, getonetour, getalltours, updatetour } from "../Controllers/tours.controller";
import { verifyToken } from "../Middlewares/verifyTokens";

const tourRouter = Router()

tourRouter.post('/', createtour)
tourRouter.get('/', verifyToken, getalltours)
tourRouter.put('/update/:id', verifyToken, updatetour)
tourRouter.get('/:id', verifyToken, getonetour)
tourRouter.delete('/delete/:id', verifyToken, deletetour)

export default tourRouter