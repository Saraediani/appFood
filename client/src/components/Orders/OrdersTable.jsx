import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getData = async () => {
      try {
        const { data } = await axiosPrivate.get(`/order`, {
          signal: controller.signal,
        });
        isMounted && setOrders(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handelDelete = async (id) => {
    try {
      await axiosPrivate.delete(`/order/${id}`);
      const ownersList = orders.filter((order) => order._id !== id);
      setOrders(ownersList);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <article className="dashboard__body__list text-center">
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Status</th>
            <th>Payment Statue</th>
            <th>Shipping Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order._id}>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
                <td>{order.payment.isPayed ? "payed" : "pending"}</td>
                <td>
                  {order.shippingAddress.street} {order.shippingAddress.city}
                </td>
                <td className="d-flex justify-content-evenly">
                  <Link className="text-primary" to={`update/${order._id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <span
                    className="text-danger"
                    role="button"
                    onClick={() => handelDelete(order._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
}

export default OrdersTable;
