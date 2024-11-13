import express from 'express'
import isLogin from '../Middleware/isLogin.js'
import isAdmin from '../Middleware/isAdmin.js'
import { create, getAllComment, getProductComment, isPublish, remove } from '../Controllers/CommentCn.js'

const commentRouter=express.Router()
commentRouter.route('/create/:id').post(isLogin,create).get(isAdmin,getAllComment)
commentRouter.route('/:id').get(getProductComment).patch(isAdmin,isPublish).delete(isAdmin,remove)

export default commentRouter