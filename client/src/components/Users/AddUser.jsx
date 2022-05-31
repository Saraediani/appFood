import { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGlobalContext from "../../hooks/useGlobalContext";

function AddUser({  type }) {
  const { closeModal } = useGlobalContext();
  const axiosPrivate = useAxiosPrivate();
  const [user, setUser] = useState({ role: type });
  const { firstName, lastName, email, phone } = user;

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosPrivate.post("user", user);
      closeModal();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <form className="p-3" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-control"
          placeholder="First Name"
          value={firstName}
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-control"
          placeholder="Last Name"
          value={lastName}
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          className="form-control"
          placeholder="Phone Number"
          value={phone}
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-success">
          Add Owner
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

export default AddUser;
