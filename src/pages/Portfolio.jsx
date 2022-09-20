import { useEffect } from 'react';
import { useState } from 'react'
import Headermain from '../components/Header';
import PortfolioDisplay from '../components/PortfolioDisplay'
const Portfolio = () => {


  return (
    <>
    <Headermain/>
    <div className='parbackground'>
      <h1 className='Head'>Title </h1>
    <PortfolioDisplay/>
    <div className='top'> top</div>
    <div className='bottom'> bottom</div>
    </div>
  </>
  )
}

export default Portfolio
