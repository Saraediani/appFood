import { useState } from "react";

import MealsTable from "./MealsTable";
import Modal from "../Modal";
import AddMeal from "./AddMeal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import useGlobalContext from "../../hooks/useGlobalContext";

function MealsList({ title }) {
  const { openModal } = useGlobalContext();
  return (
    <section className="dashboard__body">
      <header className="dashboard__body__header">
        <h3 className="dashboard__body__header__title m-0">{title}</h3>
        <button
          className="dashboard__body__header__button me-3"
          onClick={openModal}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </header>
      <Modal backgroundColor="#141c26">
        <AddMeal />
      </Modal>
      <MealsTable />
    </section>
  );
}

export default MealsList;
