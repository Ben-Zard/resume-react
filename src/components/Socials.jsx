import { Github, Twitter, Facebook, YouTube } from "./Svg";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


const SocialIcons = () => {
  const mq = window.matchMedia("(max-width: 40em)").matches;

  return (
    <div className="socialicons">
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/" }}
        >
          <Github
            width={25}
            height={25}
            fill={"#000000"
            }
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://twitter.com/" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={"#000000"
            }
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com/" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={
                "#000000"
            }
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname:
              "https://www.youtube.com/",
          }}
        >
          <YouTube
            width={25}
            height={25}
            fill={
                "#000000"
            }
          />
        </NavLink>
      </motion.div>

      <span className="line"
        initial={{ height: 0 }}
        animate={{ height: mq ? "5rem" : "8rem" }}
        color={"#000000"}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </div>
  );
};

export default SocialIcons;
