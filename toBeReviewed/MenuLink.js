import { motion } from 'framer-motion'
import React from 'react'
import './MenuLink.css'
import { Link } from 'react-router-dom'

const variants = {
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

export const MenuLink = ({ link, path, icon, onClick, width }) => {
    return (
        <>
            <Link to={path}>
                <motion.li
                    style={{ width }}
                    onClick={onClick}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {link}

                </motion.li>
            </Link>
        </>
    )
}
export default MenuLink
