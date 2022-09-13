import React from 'react'
import { FaReact,FaPython,FaSass,FaJsSquare,FaDatabase,FaGithub } from "react-icons/fa";

function Cube() {
  return (
    <><div className>
        <div className="maincube">
          <div className="spinner">

            <div className="FaReact cube">
              <FaReact color="#DD0031" />
            </div>
            <div className="FaPython cube">
              < FaPython color="#F06529" />
            </div>
            <div className="FaSass cube">
              <FaSass color="#28A4D9" />
            </div>
            <div className="FaJsSquare cube">
              <FaJsSquare color="#5ED4F4" />
            </div>
            <div className="FaDatabase cube">
              <FaDatabase color="#EFD81D" />
            </div>
            <div className="FaGithub cube">
              <FaGithub color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Cube