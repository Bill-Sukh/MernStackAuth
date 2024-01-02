import express from 'express'
import { signUp } from '../controller/auth.controller.js'

const routes = express.Router()

routes.post('/signup', signUp)
 
export default routes