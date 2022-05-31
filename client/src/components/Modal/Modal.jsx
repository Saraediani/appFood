import { StyledModal } from "./Modal.styles";

import useGlobalContext from "../../hooks/useGlobalContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({children, backgroundColor }) => {

  const {isModalOpen, closeModal} = useGlobalContext()

  return (
    <>
      {isModalOpen && (
        <StyledModal>
          <div
            className="popup-content"
            style={{ backgroundColor: backgroundColor }}
          >
            <span
              className="float-end me-2 mt-1"
              role="button"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faXmark} />
            </span>
            {children}
          </div>
        </StyledModal>
      )}
    </>
  );
};

export default Modal;
