import React from 'react';
import {Select} from 'antd';
const SelectItem =(props)=>{
  return(
    <Select defaultValue={props.value}>
      <Select.Option label="1" value="2"></Select.Option>
      {props.option.map((item,index)=>{
         return <Select.Option key={index} value={item.value}>{item.label}</Select.Option> 
       })} 
    </Select>
  )
}
export default SelectItem;