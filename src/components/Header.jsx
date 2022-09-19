import React, { useState } from "react";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext } from "../config/content_option.js";
import astronaut from "./spaceman.png";
// import Themetoggle from "../components/themetoggle";
import { motion } from "framer-motion";
const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 1.5,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 1.5,
        staggerDirection: 1,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      variants={itemVariants}
      className="header"
    >
      <header className="site__header">
        <div className="inner">
          <Link className="navbarbrand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="flexinner">
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu">
            <motion.div className="spaceman"
            initial={{ right: '-20%', top: '150%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}>
              <img src={astronaut}  alt="spaceman" />
          </motion.div>

            <div className="menu__wrapper">
              <div className="menu__container">
                <motion.ul 
                    variants={sideVariants}
                    animate="open"
                className="the_menu">
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    variants={sideVariants}
                    className="menu_item "
                  >
                    <Link onClick={handleToggle} to="/" className="">
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    variants={sideVariants}
                    className="menu_item "
                  >
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className=""
                    >
                      Portfolio
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    variants={sideVariants}
                    className="menu_item"
                  >
                    <Link onClick={handleToggle} to="/about" className="">
                      About
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    variants={sideVariants}
                    className="menu_item"
                  >
                    <Link onClick={handleToggle} to="/contact" className="">
                      Contact
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
          <div className="menu_footer">
            <p className="copyright">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </motion.div>
  );
};

export default Headermain;
