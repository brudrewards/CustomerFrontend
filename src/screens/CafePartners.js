import React from 'react'
import './CafePartners.css'
import {Link} from "react-router-dom"
import BusinessSignupForm from '../BusinessSignupForm'



function CafePartners() {
    return (
        <div className="cafePartnersScreen">
    
            <div className="cafePartnersScreen__header">
                <Link to ="/">
                <img src={require("./assets/rewards_logo_inverted.jpg")} alt="Brud_Rewards_logo" />
                </Link>
            </div>
            <h1 className="cafePartnersScreen__heading">Create a Business account</h1>
            <div className="cafePartnersScreen__rewards">
                <h4>BRU'd Rewards</h4>
                <p>
                    Sign up to be one of the first Cafes to take advantage of 
                    steep rewards!
                </p>
            </div>
            <BusinessSignupForm />
        </div>
    )
}

export default CafePartners
