import express from 'express'
import { getUser } from '../controller/user.controller.js'

const routes = express.Router()

routes.get('/', getUser)
 
export default routes