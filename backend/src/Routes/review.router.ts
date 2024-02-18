import { Router } from "express";
import { createreview, deletereview, getonereview, getallreviews, updatereview} from "../Controllers/reviews.controller";
import { verifyToken } from "../Middlewares/verifyToken";

const reviewRouter = Router()

reviewRouter.post('/', createreview)
reviewRouter.get('/', verifyToken, getallreviews)
reviewRouter.get('/:id', verifyToken, getonereview)
reviewRouter.put('/update/:id', verifyToken, updatereview)
reviewRouter.delete('/delete/:id', verifyToken, deletereview)

export default reviewRouter