import { Router } from "express";
import { createtourCategory, getAllCategories } from "../Controllers/tourCategory.controller";

const tourCategoryRouter = Router()

tourCategoryRouter.post('/', createtourCategory)
tourCategoryRouter.get('/', getAllCategories)

export default tourCategoryRouter