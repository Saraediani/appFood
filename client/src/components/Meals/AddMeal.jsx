import { useEffect, useState } from "react";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGlobalContext from "../../hooks/useGlobalContext";

import UploadsFiles from "../UploadsFiles";

function AddMeal() {
  const { closeModal } = useGlobalContext();
  const axiosPrivate = useAxiosPrivate();
  const [files, setFiles] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [meal, setMeal] = useState({});
  const { name, description, category, price, restaurantId } = meal;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getData = async () => {
      try {
        const response = await axiosPrivate.get(`/restaurant`, {
          signal: controller.signal,
        });
        isMounted && setRestaurants(response.data.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response);
        }
        console.error(err);
      }
    };

    getData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handelChange = (e) => {
    e.preventDefault();
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    files.map((image) => data.append("images", image));
    data.append("category", category);
    data.append("restaurantId", restaurantId);

    const controller = new AbortController();

    try {
      await axiosPrivate.post("meal", data, {
        signal: controller.signal,
        withCredentials: true,
      });
      closeModal();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.error(error.message);
    }
  };

  return (
    <form className="p-3" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control w-100"
          name="description"
          id="description"
          placeholder="Description"
          onChange={handelChange}
          value={description}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          className="form-control"
          placeholder="Category"
          value={category}
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="restaurantId" className="form-label">
          Restaurant
        </label>
        <select
          name="restaurantId"
          id="restaurantId"
          className="form-select"
          value={restaurantId}
          onChange={handelChange}
        >
          {restaurants.map((restaurant) => {
            return (
              <option key={restaurant._id} value={restaurant._id}>
                {restaurant.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-3">
        <UploadsFiles name="images" setFiles={setFiles} />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-success">
          Add Meal
        </button>
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </form>
  );
}

export default AddMeal;
