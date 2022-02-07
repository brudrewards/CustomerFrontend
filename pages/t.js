import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Aos from "aos";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";

const Test = () => {
  const router = useRouter();

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const { state, dispatch } = useContext(DataContext);
  const { navbar, auth } = state;

  // const [state, setstate] = useState(false);
  return (
    <div id="t" className="d-flex flex-column align-items-center">
      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: "NAVBAR",
            payload: false,
          });
        }}
      >
        Navbar
      </button>
      <button className="btn" onClick={() => router.push("/cafe")}>
        display
      </button>

      <div className="box">
        <div className="d-flex">
          <div className="test">
            <button className="btn" onClick={() => setstate(!state)}>
              yes
            </button>
          </div>
          <div className="test"></div>
        </div>
        <div className={`ani ${state && "right"}`}>
          <div className={`ball `}></div>
        </div>
      </div>

      <button className="btn">no</button>

      {/* {state && <div data-aos="fade-in">hello</div>} */}

      {/* <div data-aos="fade-up">hello</div> */}

      <label className="custom-field">
        <input type="email" placeholder="&nbsp;" />
        <span className="placeholder">Enter Email</span>
        <span className="error-message" aria-live="polite">
          The email is invalid
        </span>
      </label>

      <label className="custom-field one">
        <input type="text" placeholder=" " />
        <span className="placeholder">Enter Text</span>
      </label>

      <label className="custom-field two">
        <input type="url" placeholder="&nbsp;" />
        <span className="placeholder">Enter URL</span>
      </label>

      <label className="custom-field three">
        <input type="password" placeholder="&nbsp;" />
        <span className="placeholder">Enter Password</span>
        <span className="border"></span>
      </label>
    </div>
  );
};

export default Test;
