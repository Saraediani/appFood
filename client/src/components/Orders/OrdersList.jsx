import OrdersTable from "./OrdersTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

import { StyledContent } from "../Layout/DashboardContent/DashboardContent.styles";
import Modal from "../Modal";
import AddOrder from "./AddOrder";
import useGlobalContext from "../../hooks/useGlobalContext";

function OrdersList({ title}) {
  const { openModal } = useGlobalContext();
  return (
    <StyledContent>
      <header className="dashboard__body__header">
        <h3 className="dashboard__body__header__title m-0">{title}</h3>
        {/* <button className="dashboard__body__header__button me-3">
          <FontAwesomeIcon icon={faPlusSquare} onClick={openModal} />
        </button> */}
      </header>
      {/* <Modal backgroundColor="#141c26">
        <AddOrder />
      </Modal> */}
      <OrdersTable />
    </StyledContent>
  );
}

export default OrdersList;
