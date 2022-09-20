import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Github } from "./Svg";

const PortfolioCard = (props) => {
  const item = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
  };
  const { id, name, description,photo, tags, demo, github } = props.data;
  return (
    <motion.li className='box' key={id} variants={item}>
      <h2 className='title'>{name}</h2>
      <h4 className='description'>{description}</h4>
      <img alt = '#' className='photo' src = {photo}/>
      <div  className='tags'>
        {tags.map((t, id) => (
          <span key={id} className = 'tag'>#{t}</span>
        ))}
      </div>
      <footer className='footer'>
        <Link to={{ pathname: `${demo}` }} target="_blank"className='link'>
          Visit
        </Link>
        <NavLink to={{ pathname: `${github}` }} target="_blank"className='git'>
          <Github width={30} height={30} className='github'/>
        </NavLink>
      </footer>
    </motion.li>
  );
};


export default PortfolioCard