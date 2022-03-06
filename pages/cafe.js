import React from "react";
const Cafe = () => {
  const eidtCafe = () => {
    return (
      <div>
        <h1>Edit Cafe</h1>
        <div>
          <div>image</div>
          <button className="btn">Edit Address</button>

          <form className="d-flex flex-column">
            <label className="custom-field">
              <input type="text" />
              <span className="placeholder">Restaurant Name</span>
            </label>
            <label className="custom-field">
              <input type="text" />
              <span className="placeholder">Manager Full Name</span>
            </label>
            <label className="custom-field">
              <input type="text" />
              <span className="placeholder">Email Id</span>
            </label>
            <label className="custom-field">
              <input type="text" />
              <span className="placeholder">Phone Number</span>
            </label>
            <button className="btn">Done</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">{eidtCafe()}</div>
    </div>
  );
};

export default Cafe;
