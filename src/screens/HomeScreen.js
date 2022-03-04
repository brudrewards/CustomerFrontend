import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Info from "../Info";


function HomeScreen() {
    return (
        <div className="homeScreen">
            <Fade>
                <div className="homeScreen__top">
                    <h4>
                        Our Mission is to empower local coffee shops, reward coffee connoisseurs, and connect communities.

                    </h4>
                </div>
            </Fade>
            <Fade>
                <div className="homeScreen__features" >
                    <Info
                        title="Earn Rewards"
                        image="./assets/Earn1.jpg"
                        info="Rewards on-the-go or in-store purchases.You can earn in participating locally owned store."
                        link="Earn"
                        path="/"
                        color="#1e3932"
                        background="#A37F5B"
                        className="info__hoverLight" 

                    />
                    <Info
                        title="Redeem"
                        image="./assets/Redeem1.jpg"
                        info="Rewards points at any partnered coffee shop so you won't be limited to just one locally owned store."
                        link="Redeem"
                        path="/"
                        color="#1e3932"
                        background="#E1A269"
                        className="info__hoverLight"
                    />
                    <Info
                        title="Experience"
                        image="./assets/Experience1.jpg"
                        info="Unique environments, mouth watering food, craft beverages."
                        link="Experience"
                        path="/"
                        color="#1e3932"
                        background="#A37F5B"
                        className="info__hoverLight"
                    />
                </div>
            </Fade>
            <Fade>
                <div className="homeScreen__bottom">
                    <div className="homeScreen__bottomLeft">
                        <p>
                            Sign up to be one of the first people to take advantage of steep rewards with the first coffee on us!
                        </p>
                        <button>Join Now</button>
                    </div>
                    <div className="homeScreen__bottomRight">
                        <img src={require("./assets/Coffee.png")} alt="Coffee_pic" />
                        <img src={require("./assets/Coffee2.png")} alt="Coffee2_pic" />
                        <img src={require("./assets/Cake.png")} alt="Cake_pic" />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default HomeScreen;