import express from 'express'
import isLogin from "../Middleware/isLogin.js";
import { getAll, getOne, payment,update,verify } from '../Controllers/OrderHistoryCn.js';
import isAdmin from '../Middleware/isAdmin.js';

const orderRouter=express.Router()
orderRouter.route('/').get(isLogin,verify)
orderRouter.route('/').post(isLogin,payment).get(isLogin,getAll)
orderRouter.route('/:id').patch(isAdmin,update).get(isLogin,getOne)

export default orderRouter