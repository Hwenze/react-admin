import React,{Component} from 'react';
import SearchFrom from '../../../components/SearchFrom';
import TableFrom from '../../../components/Table';
import tableList from './data';
import {
  Icon,
  Divider,
} from 'antd'
class List extends Component{
  constructor(props){
    super(props)
  }
  openDetails=(item)=>{
    console.log(item);
  }
  render(){
    const col = [
      {
        title:'Product ID',
        tableIndex:'productId',
        key:'productId'
      },
      {
        title:'Image',
        tableIndex:'image',
        key:'image'
      },
      {
        title:'Product Name',
        tableIndex:'productName',
        key:'productName'
      },
      {
        title:'Category',
        tableIndex:'category',
        key:'category'
      },
      {
        title:'Price',
        tableIndex:'price',
        key:'price'
      },
      {
        title:'Selling Price',
        tableIndex:'sellingPrice',
        key:'sellingPrice'
      },
      {
        title:'Product Source',
        tableIndex:'productSource',
        key:'productSource'
      },
      {
        title:'Status',
        tableIndex:'status',
        key:'status'
      },
      {
        title:'Action',
        tableIndex:'action',
        key:'action',
        render:(text, record) => (
          <span>
            <Icon type="edit" onClick={()=>{this.openDetails(record)}}/>
            <Divider type="vertical" />
            <Icon type="delete"></Icon>
          </span>
        )
      },
    ]
    return(
      <div>
        <SearchFrom data={searchFrom} search={this.search}/>
        <div className="main-wrapper">
          <TableFrom rowKey={(r,i)=>(i)} data={tableList} col={col} ></TableFrom>
        </div>
      </div>
    )
  }
}
export default List;