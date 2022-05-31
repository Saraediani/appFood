import Order from "../models/Order.js";
import Restaurant from "../models/Restaurant.js";
import User from "../models/User.js";
import Meal from "../models/Meal.js";

const analytics = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalRestaurants = await Restaurant.countDocuments();
    const totalClient = await User.countDocuments({ role: "client" });
    const menuItems = await Meal.countDocuments();

    const canceledOrders = await Order.countDocuments({ status: "canceled" });
    const deliveredOrders = await Order.countDocuments({ status: "delivered" });
    const inProgressOrders = totalOrders - canceledOrders - deliveredOrders;

    const ordersByMonth = await Order.aggregate([
      { $match: { status: "delivered" } },
      {
        $group: {
          _id: { $month: "$createdAt" },
          totalOrders: { $sum: 1 },
          amount: { $sum: "$price" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    //   .aggregate([
    //   {
    //     $group: {
    //       _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
    //       orders: {
    //         $sum: "$_id",
    //       },
    //     },
    //   },
    // ]);

    return res.status(200).json({
      error: false,
      analytics: {
        totalOrders,
        totalRestaurants,
        totalClient,
        menuItems,
        ordersByMonth,
      },
      orderStatics: [deliveredOrders, canceledOrders, inProgressOrders],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

export default { analytics };
