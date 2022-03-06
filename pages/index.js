import React from "react";
import LandingLayout from "../layouts/landingLayout/LandingLayout";
import { Fade } from "react-awesome-reveal";
import Info from "../layouts/landingLayout/components/Info";
import Image from "next/image";

/*****************
 * image imports
 *****************/
import EarnImg from "../public/assets/Earn1.jpg";
import RedeemImg from "../public/assets/Redeem1.jpg";
import ExperienceImg from "../public/assets/Experience1.jpg";
import CoffeeImg from "../public/assets/Coffee.png";
import CoffeeImg2 from "../public/assets/Coffee2.png";
import CakeImg from "../public/assets/Cake.png";

export default function Home() {
  return (
    <LandingLayout>
      <Fade>
        <div className="homeScreen__top">
          <h4>
            Our Mission is to empower local coffee shops, reward coffee
            connoisseurs, and connect communities.
          </h4>
        </div>
      </Fade>
      <Fade>
        <div className="homeScreen__features">
          <Info
            title="Earn Rewards"
            image={EarnImg}
            info="Rewards on-the-go or in-store purchases.You can earn in participating locally owned store."
            link="Earn"
            path="/"
            color="#1e3932"
            background="#A37F5B"
            className="info__hoverLight"
          />
          <Info
            title="Redeem"
            image={RedeemImg}
            info="Rewards points at any partnered coffee shop so you won't be limited to just one locally owned store."
            link="Redeem"
            path="/"
            color="#1e3932"
            background="#E1A269"
            className="info__hoverLight"
          />
          <Info
            title="Experience"
            image={ExperienceImg}
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
              Sign up to be one of the first people to take advantage of steep
              rewards with the first coffee on us!
            </p>
            <button>Join Now</button>
          </div>
          <div className="homeScreen__bottomRight">
            <Image src={CoffeeImg} alt="Coffee_pic" />
            <Image src={CoffeeImg2} alt="Coffee2_pic" />
            <Image src={CakeImg} alt="Cake_pic" />
          </div>
        </div>
      </Fade>
    </LandingLayout>
  );
}
