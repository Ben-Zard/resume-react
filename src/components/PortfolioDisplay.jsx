import {useRef,useEffect} from 'react'
import {motion} from "framer-motion";
import PortfolioCard from './PortfolioCard';
import { Projects } from "../config/Projects";
const PortfolioDisplay = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);
 
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
      <motion.div 
      key="work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    className = "portfolioDisplay">
       <motion.ul ref={ref} variants={effects} initial="hidden" animate="show" className='card'>
              {Projects.map((d) => (
                <PortfolioCard key={d.id} data={d} />
              ))}
            </motion.ul>
      </motion.div>
    
  
  );
}

export default PortfolioDisplay