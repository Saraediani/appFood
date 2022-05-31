import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import useGlobalContext from "../../hooks/useGlobalContext";

function MealsTable() {
    const { isModalOpen } = useGlobalContext();
  const [meals, setMeals] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getData = async () => {
      try {
        const { data } = await axiosPrivate.get(`/meal`, {
          signal: controller.signal,
        });
        isMounted && setMeals(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [isModalOpen]);

  const handelDelete = async (id) => {
    try {
      await axiosPrivate.delete(`/meal/${id}`);
      const mealsList = meals.filter((meal) => meal._id !== id);
      setMeals(mealsList);
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
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal, index) => {
            return (
              <tr key={index}>
                <td>{meal.name}</td>
                <td>
                  {meal.description.length <= 50
                    ? meal.description
                    : `${meal.description.slice(0, 50)}...`}
                </td>
                <td>{meal.category}</td>
                <td>{meal.price}</td>
                <td className="d-flex justify-content-evenly">
                  <Link className="text-primary" to={`update/${meal._id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <span
                    className="text-danger"
                    role="button"
                    onClick={() => handelDelete(meal._id)}
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

export default MealsTable;
