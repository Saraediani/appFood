import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import UploadsFiles from "../UploadsFiles";

function UpdateMeal({ title }) {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const params = useParams();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getRestaurants = async () => {
      try {
        const response = await axiosPrivate.get(`/restaurant`, {
          signal: controller.signal,
        });
        if (isMounted) {
          setRestaurants(response.data.data);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response);
        }
        console.error(err);
      }
    };

    const getMeal = async () => {
      try {
        const response = await axiosPrivate.get(`/meal/${params.id}`, {
          signal: controller.signal,
        });
        if (isMounted) {
          setMeal(response.data.data);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response);
        }
        console.error(err);
      }
    };

    getRestaurants();
    getMeal();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const [restaurants, setRestaurants] = useState([]);
  const [files, setFiles] = useState([]);
  const [meal, setMeal] = useState({});
  const { name, description, category, price, restaurantId } = meal;

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
      await axiosPrivate.patch(`meal/${params.id}`, data, {
        signal: controller.signal,
        withCredentials: true,
      });
      navigate(-1);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.error(error.message);
    }
  };
  return (
    <section className="dashboard__body">
      <header className="dashboard__body__header">
        <h3 className="dashboard__body__header__title m-0">{title}</h3>
      </header>
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
          <UploadsFiles name="images" setFiles={setFiles} value={files}/>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </div>
      </form>
    </section>
  );
}
export default UpdateMeal;
