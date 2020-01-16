import React from 'react';
import {Select} from 'antd';
const SelectItem =(props)=>{
  return(
    <Select style={{width:props.width?props.width:'180px'}} defaultValue={props.value}>
      {props.option.map((item,index)=>{
         return <Select.Option key={index} value={item.value}>{item.label}</Select.Option> 
       })} 
    </Select>
  )
}
export default SelectItem;