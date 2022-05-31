import Order from "../models/Order.js";
import { orderValidation } from "../validation/orderValidation.js";

const addOrder = async (req, res) => {
  // const ordersId = [
  //   "625a2d5ad7a1dcd8b038f719",
  //   "625a2d64d7a1dcd8b038f71c",
  //   "625a2d64d7a1dcd8b038f71f",
  //   "625a2d64d7a1dcd8b038f722",
  //   "625a2d64d7a1dcd8b038f725",
  //   "625a2d64d7a1dcd8b038f728",
  //   "625a2d64d7a1dcd8b038f72b",
  //   "625a2d64d7a1dcd8b038f72e",
  //   "625a2d64d7a1dcd8b038f731",
  //   "625a2d65d7a1dcd8b038f734",
  //   "625a2d65d7a1dcd8b038f737",
  //   "625a2d7cd7a1dcd8b038f73a",
  //   "625a2d7cd7a1dcd8b038f73d",
  //   "625a2d7cd7a1dcd8b038f740",
  //   "625a2d7cd7a1dcd8b038f743",
  //   "625a2d7cd7a1dcd8b038f746",
  //   "625a2d7cd7a1dcd8b038f749",
  //   "625a2d7cd7a1dcd8b038f74c",
  //   "625a2d7cd7a1dcd8b038f74f",
  //   "625a2d7dd7a1dcd8b038f752",
  //   "625a2d7dd7a1dcd8b038f755",
  //   "625a2d7dd7a1dcd8b038f758",
  //   "625a2d7dd7a1dcd8b038f75b",
  //   "625a2d7dd7a1dcd8b038f75e",
  //   "625a2d7dd7a1dcd8b038f761",
  //   "625a2d7dd7a1dcd8b038f764",
  //   "625a2d7dd7a1dcd8b038f767",
  //   "625a2d7ed7a1dcd8b038f76a",
  //   "625a2d7ed7a1dcd8b038f76d",
  //   "625a2d7ed7a1dcd8b038f770",
  //   "625a2d7ed7a1dcd8b038f773",
  //   "625a2d7ed7a1dcd8b038f776",
  //   "625a2d7ed7a1dcd8b038f779",
  //   "625a2d7ed7a1dcd8b038f77c",
  //   "625a2d7ed7a1dcd8b038f77f",
  //   "625a2d7ed7a1dcd8b038f782",
  //   "625a2d7fd7a1dcd8b038f785",
  //   "625a2d7fd7a1dcd8b038f788",
  //   "625a2d7fd7a1dcd8b038f78b",
  //   "625a2d7fd7a1dcd8b038f78e",
  //   "625a2d7fd7a1dcd8b038f791",
  //   "625a2d7fd7a1dcd8b038f794",
  //   "625a2e247f4478d6e4ead328",
  //   "625a2e247f4478d6e4ead32b",
  //   "625a2e247f4478d6e4ead32e",
  //   "625a2e247f4478d6e4ead331",
  //   "625a2e247f4478d6e4ead334",
  //   "625a2e247f4478d6e4ead337",
  //   "625a2e247f4478d6e4ead33a",
  //   "625a2e257f4478d6e4ead33d",
  //   "625a2e257f4478d6e4ead341",
  //   "625a2e257f4478d6e4ead346",
  //   "625a2e257f4478d6e4ead349",
  //   "625a2e257f4478d6e4ead34c",
  //   "625a2e267f4478d6e4ead351",
  //   "625a2e267f4478d6e4ead354",
  //   "625a2e267f4478d6e4ead358",
  //   "625a2e267f4478d6e4ead35b",
  //   "625a2e267f4478d6e4ead35e",
  //   "625a2e267f4478d6e4ead361",
  //   "625a2e277f4478d6e4ead364",
  //   "625a2e277f4478d6e4ead367",
  //   "625a2e277f4478d6e4ead36b",
  //   "625a2e277f4478d6e4ead36e",
  //   "625a2e277f4478d6e4ead371",
  //   "625a2e277f4478d6e4ead374",
  //   "625a34c5a6378ca35783a0b3",
  // ];
  // const dupordersIds = [
  //   "625a2d5ad7a1dcd8b038f719",
  //   "625a2d64d7a1dcd8b038f71c",
  //   "625a2d64d7a1dcd8b038f71f",
  //   "625a2d64d7a1dcd8b038f722",
  //   "625a2d64d7a1dcd8b038f725",
  //   "625a2d64d7a1dcd8b038f728",
  //   "625a2d64d7a1dcd8b038f72b",
  //   "625a2d64d7a1dcd8b038f72e",
  //   "625a2d64d7a1dcd8b038f731",
  //   "625a2d65d7a1dcd8b038f734",
  //   "625a2d65d7a1dcd8b038f737",
  //   "625a2d7cd7a1dcd8b038f73a",
  //   "625a2d7cd7a1dcd8b038f73d",
  //   "625a2d7cd7a1dcd8b038f740",
  //   "625a2d7cd7a1dcd8b038f743",
  //   "625a2d7cd7a1dcd8b038f746",
  //   "625a2d7cd7a1dcd8b038f749",
  //   "625a2d7cd7a1dcd8b038f74c",
  //   "625a2d7cd7a1dcd8b038f74f",
  //   "625a2d7dd7a1dcd8b038f752",
  //   "625a2d7dd7a1dcd8b038f755",
  //   "625a2d7dd7a1dcd8b038f758",
  //   "625a2d7dd7a1dcd8b038f75b",
  //   "625a2d7dd7a1dcd8b038f75e",
  //   "625a2d7dd7a1dcd8b038f761",
  //   "625a2d7dd7a1dcd8b038f764",
  //   "625a2d7dd7a1dcd8b038f767",
  //   "625a2d7ed7a1dcd8b038f76a",
  //   "625a2d7ed7a1dcd8b038f76d",
  //   "625a2d7ed7a1dcd8b038f770",
  //   "625a2d7ed7a1dcd8b038f773",
  //   "625a2d7ed7a1dcd8b038f776",
  //   "625a2d7ed7a1dcd8b038f779",
  //   "625a2d7ed7a1dcd8b038f77c",
  //   "625a2d7ed7a1dcd8b038f77f",
  //   "625a2d7ed7a1dcd8b038f782",
  //   "625a2d7fd7a1dcd8b038f785",
  //   "625a2d7fd7a1dcd8b038f788",
  //   "625a2d7fd7a1dcd8b038f78b",
  //   "625a2d7fd7a1dcd8b038f78e",
  //   "625a2d7fd7a1dcd8b038f791",
  //   "625a2d7fd7a1dcd8b038f794",
  //   "625a2e247f4478d6e4ead328",
  //   "625a2e247f4478d6e4ead32b",
  //   "625a2e247f4478d6e4ead32e",
  //   "625a2e247f4478d6e4ead331",
  //   "625a2e247f4478d6e4ead334",
  //   "625a2e247f4478d6e4ead337",
  //   "625a2e247f4478d6e4ead33a",
  //   "625a2e257f4478d6e4ead33d",
  //   "625a2e257f4478d6e4ead341",
  //   "625a2e257f4478d6e4ead346",
  //   "625a2e257f4478d6e4ead349",
  //   "625a2e257f4478d6e4ead34c",
  //   "625a2e267f4478d6e4ead351",
  //   "625a2e267f4478d6e4ead354",
  //   "625a2e267f4478d6e4ead358",
  //   "625a2e267f4478d6e4ead35b",
  //   "625a2e267f4478d6e4ead35e",
  //   "625a2e267f4478d6e4ead361",
  //   "625a2e277f4478d6e4ead364",
  //   "625a2e277f4478d6e4ead367",
  //   "625a2e277f4478d6e4ead36b",
  //   "625a2e277f4478d6e4ead36e",
  //   "625a2e277f4478d6e4ead371",
  //   "625a2e277f4478d6e4ead374",
  //   "625a34c5a6378ca35783a0b3",
  // ];

  // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  // // const count = _.random(1, 6);
  // if (ordersId.length == 0) {
  //   ordersId = dupordersIds;
  // }
  // const orders = [];
  // const item = {};

  // for (let i = 0; i <= random(1, 3); i++) {
  //   const count = random(1, 4);
  //   const order = ordersId.shift();
  //   item.orderId = order;
  //   item.amount = count;
  //   orders.push(item);
  // }
  // return res.send(req.body);
  try {
    // const result = orderValidation(req.body);
    // if (result.error)
    //   return res
    //     .status(400)
    //     .json({ error: true, message: result.error.message, data: result.value });
    // // const quantity = req.body.orders.length;
    // result.value.quantity = req.body.orders.length;
    // result.value.clientId = req.user._id;
    // return res.send(result.value);
    req.body.quantity = req.body.orders.length;
    const order = new Order(req.body);
    await order.save((err, data) => {
      if (err)
        return res
          .status(400)
          .json({ error: true, message: err.message, data: data });
      return res.status(200).json({
        error: false,
        message: "Order added successfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const result = orderValidation(req.body);
    if (result.error)
      return res
        .status(400)
        .json({ error: true, message: result.error.message });
    const order = await Order.findOneAndUpdate({ _id: id }, result.value, {
      new: true,
      runValidators: true,
    });
    if (!order)
      return res.status(404).json({ error: true, message: "order not found" });
    return res
      .status(200)
      .json({ error: false, message: "order updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findOneAndDelete({ _id: id });
    if (!order)
      return res.status(404).json({
        error: true,
        message: "Order doesn't exist or already deleted",
      });
    return res.status(200).json({
      error: false,
      message: "Order has been deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getAllOrders = async (req, res) => {
  const page = req.query.page ? parseInt(req.query.page, 10) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;

  const pipeline = [
    {
      $lookup: {
        from: "users",
        localField: "clientId",
        foreignField: "_id",
        as: "client",
      },
    },
    {
      $project: {
        quantity: 1,
        status: 1,
        price: 1,
        address: "$shippingAddress.street",
        paymentStatus: "$payment.isPayed",
        client: {
          firstName: "$client.firstName",
          lastName: "$client.lastName",
        },
        address: {
          street: "$shippingAddress.street",
          city: "$shippingAddress.city",
        },
      },
    },
    {
      $limit: 10,
    },
  ];

  // const filter = { $match: {}, $skip: {} };

  // if (req.query.page) {
  //   filter["$skip"] = page * limit;
  // }
  // if (req.query.category) filter["$match"]["category"] = req.query.category;
  // if (req.query.price) filter["$match"].price = req.query.price;
  // // if (req.query.cuisine) filter["$match"].cuisine = req.query.cuisine;
  // // if (req.user.role == "manager") filter["$match"].managerId = req.user._id;

  // if (filter.hasOwnProperty("$match") == null)
  //   pipeline.unshift(filter["$match"]);

  // if (filter.hasOwnProperty("$skip") == null) pipeline.push(filter["$skip"]);
  // console.log(filter.hasOwnProperty("$match") == null);

  try {
    const orders = await Order.aggregate(pipeline);
    const totalOrder = await Order.countDocuments();
    const numberOfPages = Math.ceil(totalOrder / limit);
    return res.send(orders);
    res.status(200).json({
      error: false,
      found: orders.length,
      numberOfPages,
      data: orders,
      pipeline,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order)
      return res.status(404).json({ error: true, message: "Order not found" });
    res.status(200).json({ error: false, data: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const cancelOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findOne({ _id: id, clientId: req.user._id });
    return res.status(200).json({ error: false, data: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

export default {
  addOrder,
  updateOrder,
  getOrder,
  getAllOrders,
  deleteOrder,
  cancelOrder,
};
