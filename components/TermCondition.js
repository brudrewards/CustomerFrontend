import React from "react";

const TermCondition = () => {
  return (
    <div className="px-2">
      <div
        className="modal fade"
        id="termsPolicy"
        aria-hidden="true"
        aria-labelledby="termsPolicy"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="termsPolicy">
                Terms and Policy
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6 className="py-3">Point1.1</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dolor natus odio reiciendis officiis esse a placeat inventore
                praesentium quaerat consequatur neque in, corporis nihil
                excepturi expedita ducimus deserunt iste? Corrupti accusantium
                nobis atque repudiandae quidem, ex vel minima recusandae dolore
                impedit perferendis tenetur itaque amet eligendi, enim nulla
                numquam sed sequi eius ipsa quisquam sit delectus quibusdam
                dolor. Totam! Eius sed enim aspernatur voluptatibus, ullam omnis
              </p>
              <h6 className="py-3">Point1.2</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dolor natus odio reiciendis officiis esse a placeat inventore
                praesentium quaerat consequatur neque in, corporis nihil
                excepturi expedita ducimus deserunt iste? Corrupti accusantium
                nobis atque repudiandae quidem, ex vel minima recusandae dolore
                impedit perferendis tenetur itaque amet eligendi, enim nulla
                numquam sed sequi eius ipsa quisquam sit delectus quibusdam
                dolor. Totam! Eius sed enim aspernatur voluptatibus, ullam omnis
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        className=" text-white"
        data-bs-toggle="modal"
        href="#termsPolicy"
        role="button"
      >
        Terms & Conditions
      </a>
    </div>
  );
};

export default TermCondition;
