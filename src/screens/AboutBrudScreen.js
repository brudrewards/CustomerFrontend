import React from 'react'
import Header from '../Header'
import "./AboutBrudScreen.css"


function AboutBrudScreen() {
    return (
        <div>
            <Header />
            <div className="brudScreen__top">
                <h2>
                    What is BRU’D Rewards
                </h2>
                <h4>
                BRU’D Rewards is a mobile ordering and in-person coffee shop ordering platform offering a generous loyalty rewards program to consumers looking to support locally-owned cafes. We differentiate by allowing consumers to redeem points earned at any partnered cafe, so they can experience a variety of unique cafes at any time
                </h4>
                <h2>
                Why we started?
                </h2>
                <h4>
                Large coffee shop chains like Starbucks, Dunkin Donuts, and Pete’s Coffee incentivize customers to become brand loyal through steep loyalty rewards programs through their mobile apps. Similarly, mom-and-pop-owned coffee shops often create a loyalty rewards program through a punch or stamp card, but people often lose them or forget them at home. We are creating a way that consumers don't need to feel locked into one brand of coffee shops, while also offering a loyalty rewards program to incentivize them to continue supporting local coffee shops.

                </h4>
            </div>
        </div>
            
    )
}

export default AboutBrudScreen
