import React from 'react';
export const FromItem=({component:component,labelWidth:labelWidth,...attr})=>{
  // const {label,index,component} = props;
  return(
    <div className="j-from-item" {...attr} >
      <div className="j-from-item-label" style={{width:labelWidth}}>{attr.label}</div>
      <div className="j-from-item-content">{component}</div>
    </div>
  )
}