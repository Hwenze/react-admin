import React from 'react';
import { Input } from 'antd';
const InputFrom=({placeholder:placeholder, type:type, onChange:onChange, ...props})=>{
  return(
    <Input placeholder={placeholder} type={type} onChange={onChange} {...props}/>
  )
}
export default InputFrom;