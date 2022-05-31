import { useState } from "react";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGlobalContext from "../../hooks/useGlobalContext";

function AddOrder() {
  const { closeModal } = useGlobalContext();
  const axiosPrivate = useAxiosPrivate();

  const [order, setOrder] = useState({});
  const { name, description, phone, rating, cuisine } = order;

  const handelChange = (e) => {
    setOrder((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const controller = new AbortController();
    try {
      await axiosPrivate.post("order", order, {
        signal: controller.signal,
        withCredentials: true,
      });
      closeModal();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handelSubmit} className="p-3">
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          required
          placeholder="Name"
          value={name}
          onChange={handelChange}
        />
      </div>
      <input type="submit" value="Add" />
    </form>
  );
}
export default AddOrder;
