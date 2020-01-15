import React from 'react';
export const FromItem=(props)=>{
  const {label,index,component} = props;
  return(
    <div className="j-from-item" key={index}>
    <div className="j-from-item-label">{label}</div>
    <div className="j-from-item-content">{component}</div>
  </div>
  )
}