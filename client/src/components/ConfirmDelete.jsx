function ConfirmDelete({ isOpen, handelDelete, closeModal }) {
  return (
    <div
      style={isOpen ? { display: "block" } : { display: "none" }}
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title" id="exampleModalLabel">
              Confirm Delete
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-danger fw-bold">
            Are you sure you want to delete this
          </div>
          <div className="modal-footer ">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handelDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
