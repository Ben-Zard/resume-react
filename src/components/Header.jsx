import React, { useState } from "react";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option.js";
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
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
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
      className="header"
    >
      <header className="site__header">
        <div className="inner">
          <Link className="navbarbrand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="flexinner">
            {/* <Themetoggle /> */}
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    className="menu_item "
                  >
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    className="menu_item "
                  >
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      Portfolio
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    className="menu_item"
                  >
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    className="menu_item"
                  >
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      Contact
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer">
            <div className="d">
              <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.github}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
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
