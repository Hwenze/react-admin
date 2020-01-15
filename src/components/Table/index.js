import React from 'react';
import { Table } from 'antd';
const TableFrom=(props)=>{
  return(
    <Table dataSource={props.data} columns={props.col} {...props.attr}/>
  )
}
export default TableFrom;