import React from 'react';
import {Select} from 'antd';
// 国家配置项
const countryList = [
  {
    label:'China',
    value:'CN',
    language:'Chinese',
  },
  {
    label:'USA',
    value:'US',
    language:'English',
  },
  {
    label:'Thailand',
    value:'TH',
    language:'Thai',
  },
]
const Country = (props)=>{
  const changeCountry =(value)=>{
    props.changeCountry(value);
  }
  return(
    <Select style={{width:props.width?props.width:'180px'}} defaultValue={props.value?props.value:'CN'} onChange={changeCountry}>
      {countryList.map(item=>{
        return <Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>
      })}
    </Select>
  )
}
export default Country;