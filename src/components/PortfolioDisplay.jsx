import {useRef} from 'react'
import {motion} from "framer-motion";
import PortfolioCard from './PortfolioCard';
import { Projects } from "../config/Projects";
const PortfolioDisplay = () => {
  const ref = useRef(null);
    const effects = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
    
        transition: {
          staggerChildren: 0.5,
          duration: 0.5,
        },
      },
    };

   return (
      <motion.div className = "portfolioDisplay">
       <motion.ul ref={ref} variants={effects} initial="hidden" animate="show">
              {Projects.map((d) => (
                <PortfolioCard key={d.id} data={d} />
              ))}
            </motion.ul>
      </motion.div>
    
  
  );
}

export default PortfolioDisplay