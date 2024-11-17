// import catchAsync from "../Utils/catchAsync.js";
// import HandleError from "../Utils/handleError.js";
// import jwt from "jsonwebtoken";
// import Product from "../Models/ProductMd.js";
// import OrderHistory from "../Models/OrderHistoryMd.js";
// import User from "../Models/UserMd.js";
// import ApiFeatures from "../Utils/apiFeatures.js";


// export const checkCartItems = catchAsync(async (req, res, next) => {
//   const { id: userId } = jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET);
//   const user = await User.findById(userId);
//   if (!user?.cart?.items?.length >= 0 || user?.cart?.totalPrice <= 0) {
//     return next(new HandleError("cart invalid", 400));
//   }
//   let change = false;
//   let items = user?.cart?.items;
//   let totalPrice = user?.cart?.totalPrice;
//   let newTotalPrice = 0;
//   let newItems = [];
//   for (let item of items) {
//     const product = await Product.findById(item.productId);
//     if (product.quantity == 0) {
//       change = true;
//       break;
//     } else if (product.quantity < item.quantity) {
//       item.quantity = product.quantity;
//       change = true;
//     }
//     newTotalPrice += product.finalPrice * item.quantity;
//     newItems.push(item);
//   }
//   if (totalPrice != newTotalPrice) {
//     change = true;
//   }
//   if (change) {
//     user.cart.items = newItems;
//     user.cart.totalPrice = newTotalPrice;
//     await user.save();
//     return res.status(400).json({
//       message: "سبد خريدت به روز شد.",
//       success: false,
//       data: {
//         cart: {
//           items: newItems,
//           totalPrice: newTotalPrice,
//         },
//         change
//       },
//     });
//   }
// });


// export const payment = catchAsync(async (req, res, next) => {
//   const { addressId = null, trackingCode = null } = req.body;
//   const { id: userId } = jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET);
//   if (!addressId || !trackingCode) {
//     return next(new HandleError("address required", 400));
//   }
//   const user = await User.findById(userId)
//   const items = user.cart.items
//   for (let item of items) {
//     await Product.findByIdAndUpdate(item.productId, { $inc: { quantity: -item?.quantity } });
//   }
//   const orderData = {
//     userId,
//     addressId,
//     totalPrice: user.cart.totalPrice,
//     items,
//     trackingCode
//   };

//   const order = await OrderHistory.create(orderData);
//   user.cart = { totalPrice: 0, items: [] };
//   await user.save();
//   return res.status(201).json({
//     message: ".سفارش شما ثبت شد",
//     data: {
//       order,
//     },
//     success: true,
//   });
// })


// export const getAll = catchAsync(async (req, res, next) => {
//   const { id: userId, role } = jwt.verify(
//     req.headers.authorization.split(" ")[1],
//     process.env.JWT_SECRET
//   );
//   let queryString;
//   if (role == 'admin') {
//     queryString = req?.query
//   } else {
//     queryString = { ...req.query, filters: { ...req?.query?.filters, userId } }

//   }
//   const features = new ApiFeatures(OrderHistory, queryString)
//     .filters()
//     .sort()
//     .paginate()
//     .limitFields()

//   const order = await features.model
//   const count = await OrderHistory.countDocuments(queryString?.filters)
//   return res.status(200).json({
//     success: true,
//     data: { order },
//     count
//   })
// })


// export const getOne = catchAsync(async (req, res, next) => {
//   const { id: userId, role } = jwt.verify(
//     req.headers.authorization.split(" ")[1],
//     process.env.JWT_SECRET
//   );
//   const { id } = req.params
//   let findQuery;
//   if (role == 'admin') {
//     findQuery = { _id: id }
//   } else {
//     findQuery = { _id: id, userId }
//   }
//   const order = await OrderHistory.findOne(findQuery).populate({path: 'items.productId'}).populate({ path: 'addressId' })

//   return res.status(200).json({
//     success: true,
//     data: { order },
//     count
//   })
// })

// export const update = catchAsync(async (req, res, next) => {
//   const { id } = req.params
//   const order = await OrderHistory.findByIdAndUpdate(id, req.body, { new: true })
//   return res.status(200).json({
//     success: true,
//     data: { order },
//     count
//   })
// })

