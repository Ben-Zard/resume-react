import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioCard = (props) => {
  const item = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
  };
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <motion.li className='box' key={id} variants={item}>
      <h2 className='title'>{name}</h2>
      <h4 className='description'>{description}</h4>
      <div  className='tags'>
        {tags.map((t, id) => (
          <li key={id}>#{t}</li>
        ))}
      </div>
      <footer className='box'>
        <Link to={{ pathname: `${demo}` }} target="_blank"className='link'>
          Visit
        </Link>
        <div to={{ pathname: `${github}` }} target="_blank"className='git'>
          <div width={30} height={30}className='github' />
        </div>
      </footer>
    </motion.li>
  );
};


export default PortfolioCard