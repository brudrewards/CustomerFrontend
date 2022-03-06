import * as React from "react";
import { motion } from "framer-motion";
import MenuLink from "./MenuLink";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import SignUpButton from "./SignUpButton";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variants2 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const Navigation = ({ toggle }) => {
    const user = useSelector(selectUser);
    const [showMenuCategories, setShowMenuCategories] = React.useState(false);

    return (
        <>
            {showMenuCategories ? (
                <motion.ul variants={variants}>
                    <MenuLink
                        link="Download App"
                        path="/menu"
                        goBackIcon
                        onClick={() => {
                            setShowMenuCategories(false);
                        }}
                        width="60%"
                    />
                    <MenuLink
                        link="About Brud"
                        path="/menu"
                        onClick={() => {
                            setShowMenuCategories(false);
                            toggle();
                        }}
                    />
                    <MenuLink
                        link="Cafe Partners"
                        path="/cafe_partners"
                        onClick={() => {
                            setShowMenuCategories(false);
                            toggle();
                        }}
                    />


                </motion.ul>
            ) : (
                <motion.ul variants={variants}>
                    <MenuLink
                        link="Download App"
                        path="/download_app"
                        icon
                        onClick={() => setShowMenuCategories(true)}
                    />
                    <MenuLink link="About Brud" path="/about_brud" />
                    <MenuLink link="Cafe Partners" path="/cafe_partners" />
                    <motion.hr variants={variants2} />
                    <motion.div className="navigation__buttons" variants={variants2}>
                        {
                            <>
                                <SignUpButton />
                            </>
                        }
                    </motion.div>
                    {/* <motion.div variants={variants2}>
                        <FindAStore />
                    </motion.div> */}
                </motion.ul>
            )}
        </>
    );
};

