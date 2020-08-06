import {
  Divider, Icon,
  Switch
} from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Dialog from '../../../components/Dialog';
import SearchFrom from '../../../components/SearchFrom';
import TableFrom from '../../../components/Table';
import InputFrom from '../../../components/Input';
import action from '../state/action';
import tableList from './data';
const searchFrom = [
  {
    type:'input',
    key:'category',
    value:'',
    label:'Category'
  },
  {
    type:'select',
    value:'',
    key:'status',
    label:'Status',
    data:[
      { label:'All' , value:'' },
      { label:'Available' , value:'1' },
      { label:'Unavailable' , value:'0' },
    ]
  },
  {
    type:'select',
    value:'',
    label:'From',
    key:'from',
    data:[
      { label:'All' , value:'' },
      { label:'Taobao' , value:'taobao' },
      { label:'1688' , value:'1688' },
      { label:'TMALL' , value:'tmall' },
    ]
  },
  {
    label:'Product ID',
    value:'',
    key:'productId',
    type:'input'
  },
  {
    label:'Product Name',
    value:'',
    key:'productName',
    type:'input'
  },
]
class List extends Component{
  constructor(props){
    super(props)
    this.state={
      dialog:false,
      bigImageSrc:'',
      list: tableList,
      val: ''
    }
  }
  openDetails=(record)=>{
    // this.props.changeInfo(record);
    this.props.changeProductInfo(record);
    this.props.history.push(`/product/demoDetails/${record.id}`)
  }
  openDel=(record, index)=>{
    console.log(index)
    tableList.splice(index, 1);
    this.setState({
      list: tableList
    })
  }
  showBigImage=(item)=>{
    this.setState({
      bigImageSrc:item.mainImage,
      dialog:true,
    })
  }
  result=(type)=>{
    this.setState({
      dialog:false,
    })
  }
  handle=(e)=>{
    console.log(e);
    // this.setState({ val: e.target.value });
  }
  render(){
    const col = [
      {
        title:'Product ID',
        dataIndex:'id',
        key:'id'
      },
      {
        title:'Image',
        dataIndex:'mainImage',
        key:'mainImage',
        render:(text, record)=>(
          <img style={{width:'100px',cursor:'pointer'}} onClick={()=>{this.showBigImage(record)}} src={record.mainImage}/>
        )
      },
      {
        title:'Product Name',
        dataIndex:'title_zh',
        width:'300px',
        key:'title_zh'
      },
      {
        title:'Category',
        width:'200px',
        dataIndex:'baseCategoryName',
        key:'baseCategoryName'
      },
      {
        title:'Price',
        dataIndex:'priceRange',
        key:'priceRange'
      },
      {
        title:'Selling Price',
        dataIndex:'pruchaseRange',
        key:'pruchaseRange'
      },
      {
        title:'Product Source',
        dataIndex:'from',
        key:'from'
      },
      {
        title:'Status',
        dataIndex:'status',
        key:'status',
        render:(text, record) => (
          <Switch size="small" defaultChecked={record.status===1?true:false} />
        )
      },
      {
        title:'Action',
        dataIndex:'action',
        key:'action',
        render:(text, record, index) => (
          <span>
            <Icon type="edit" onClick={()=>{this.openDetails(record)}}/>
            <Divider type="vertical" />
            <Icon type="delete" onClick={()=>{this.openDel(record, index)}}></Icon>
          </span>
        )
      },
    ]
    return(
      <Fragment>
        <SearchFrom data={searchFrom} search={this.search}/>
        <div className="main-wrapper">
          <TableFrom rowKey={(r,i)=>(i)} data={this.state.list} col={col} ></TableFrom>
        </div>
        <Dialog footer={null} dialog={this.state.dialog} result={this.result} component={
          <div style={{width:'100%'}}>
            <img style={{width:'100%',height:'auto'}} src={this.state.bigImageSrc}/>
          </div>
        }/>
        <InputFrom className="main-input" placeholder="哈哈" type="number" onChange={this.handle(this)}></InputFrom>
      </Fragment>
    )
  }
}
const toState = (state)=>{
  return{

  }
}
const toProps = (dispatch)=>{
  return{
    changeProductInfo(value){
      dispatch(action.CHANEG_PRODUCT_INFO(value))
    }
  }
}
export default connect(toState,toProps)(List);