import React from "react";

const AboutUs = () => {
  return (
    <div className="px-2">
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-center w-100"
                id="exampleModalToggleLabel"
              >
                About Brud
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <h6 className="text-center p-3">A Brieft about Brud</h6>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                possimus, autem illo accusamus ut, nisi consequatur repudiandae,
                expedita odio nihil neque quae dicta minus ullam incidunt
                repellendus sapiente omnis nobis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        className="text-white"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        About Us
      </a>
    </div>
  );
};

export default AboutUs;
