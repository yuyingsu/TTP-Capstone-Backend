import express from 'express';
import Order from '../models/orderModel.js';
import { isAuth, isAdmin } from '../util.js';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const orders = await Order.find({}).populate('user');
  res.send(orders);
});
router.get("/mine", isAuth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});

router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.")
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send(deletedOrder)
  }
});

router.post("/", isAuth, async (req, res) => {
  console.log(req.body.orderItems);
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    user: req.user._id,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({ message: "New Order Created", data: newOrderCreated });
});

router.put("/:id/deliver", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true ;
    order.deliveredAt = new Date();
    const updatedOrder = await order.save();
    res.send(updatedOrder);
  } else {
    res.status(404).send({ message: 'Order Not Found' });
  }
}
);

export default router;
