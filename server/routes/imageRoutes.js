import express from 'express'
import { genarateImage } from '../controllers/imageController.js'
import userAuth from '../middlewares/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image',  userAuth   , genarateImage)

export default imageRouter