import express, {NextFunction, Request, Response, json} from 'express'
import cors from 'cors';
import userRouter from './Routes/user.router'
import auth_router from './Routes/auth.router'
import tourRouter from './Routes/tour.router';
import bookingRouter from './Routes/booking.router';
import reviewRouter from './Routes/review.router';
import tourCategoryRouter from './Routes/tourCategory.routes';

const app = express();
app.use(json());
app.use(cors());

app.use('/users', userRouter)
app.use('/auth', auth_router)
app.use('/tour', tourRouter)
app.use('/booking', bookingRouter)
app.use('/reviews', reviewRouter)
app.use('/tourCategory', tourCategoryRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
})

let port:number = 4100; 

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`); 
})


//supertest
export default app 