import React from 'react';
import { Table } from 'antd';
const TableFrom=({data:data,col:col,...props})=>{
  return(
    <Table dataSource={data} columns={col} {...props}/>
  )
}
export default TableFrom;