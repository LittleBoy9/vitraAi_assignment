import React from 'react'

import * as fiIcon  from "react-icons/fi";
import * as aiIcon from "react-icons/ai";

import './css/ViewSelector.css';

const  ViewSelector = () => {
  return (
    <div className="grid">
      <span className="icon-container">
        <fiIcon.FiGrid className="_icon"/>
        <aiIcon.AiOutlineUnorderedList className="_icon"/>
      </span>   
    </div>
  )
}

export default ViewSelector
