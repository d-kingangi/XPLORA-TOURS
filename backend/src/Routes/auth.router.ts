import { Router } from "express";
import { checkUserDetails, loginUser, resetPassword, logoutUser } from "../Controllers/auth.controller";
import { verifyToken } from "../Middlewares/verifyTokens";

const auth_router = Router()

auth_router.post('/login', loginUser)
auth_router.get('/checkdetails', verifyToken, checkUserDetails)
auth_router.put('/reset_pwd', resetPassword)
auth_router.post('/logout', verifyToken, logoutUser);


export default auth_router 