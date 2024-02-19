import { Router } from "express";
import { createreview, deletereview, getallreviews} from "../Controllers/reviews.controller";
import { verifyToken } from "../Middlewares/verifyTokens";

const reviewRouter = Router()

reviewRouter.post('/', createreview)
reviewRouter.get('/', verifyToken, getallreviews)
reviewRouter.get('/:id', verifyToken)
reviewRouter.delete('/delete/:id', verifyToken, deletereview)

export default reviewRouter