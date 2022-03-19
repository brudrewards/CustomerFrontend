import React from 'react'
import {Link} from "react-router-dom"
import './SignupScreen.css'
import SignupForm from '../SignupForm'

function SignupScreen() {
    return (
        <div className="signupScreen">
            <div className="signupScreen__header">
                <Link to ="/">
                <img src={require("./assets/rewards_logo_inverted.jpg")} alt="Brud_Rewards_logo" />
                </Link>
            </div>
            <h1 className="signupScreen__heading">Create an account</h1>
            <div className="signupScreen__rewards">
                <h4>BRU'd Rewards</h4>
                <p>
                    Sign up to be one of the first people to take advantage of 
                    steep rewards with the first coffee on us!
                </p>
            </div>
            <SignupForm />
        </div>
    )
}

export default SignupScreen
