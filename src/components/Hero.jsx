import React from 'react'
import Three from '../components/Three';
// import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata} from "../config/content_option";
import { Link } from "react-router-dom";
import AnimatedLetters from './AnimatedLetters';
function Hero() {

  return (

   
   <div>
    <div className = "gridEW">
    <div className = "innergrid">
        <div className="innerleft">
            <div className="intro">
              <h2 className="innerhead">{introdata.title}</h2>
              <h1 className="innertypewrite">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              
              <p className="innertext">{introdata.description}</p>
              </div>
                <div className='buttonflex'>
                <Link to="/portfolio" className="acbtn">
                  <div className="acbtn">
                    My Portfolio
                  </div>
                </Link>

                <Link to="/contact"className="acbtn">
                  <div className="acbtn ">
                    Contact Me
                  </div>
                </Link>
              </div>
              <AnimatedLetters/>
              </div>
    </div>
        <div className ="three a">
        <Three/>
    </div>
</div>
</div>
    
  )
}

export default Hero