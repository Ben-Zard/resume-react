import { motion } from 'framer-motion'
import React from 'react'
import Cube from './Cube'

function Abouttext() {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
    className='abouttext'>
      Abouttext Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quia quibusdam natus temporibus rerum quas. Totam ipsum, minima sit laborum saepe, vitae maxime ipsam ad officiis eius, quo voluptates alias?
      </motion.div>
<motion.div className='spaceman2'
initial={{ right: '20%', bottom: '150%' }}
animate={{
  right: '15%',
  bottom: '30%',
  transition: { duration: 2, delay: 1 },
}}>
  <Cube/>
  </motion.div>
      </>
  )
}

export default Abouttext