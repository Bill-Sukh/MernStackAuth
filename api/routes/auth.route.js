import express from 'express'
import { signUp, signIn } from '../controller/auth.controller.js'

const routes = express.Router()

routes.post('/signup', signUp)
routes.post('/signin', signIn)

export default routes