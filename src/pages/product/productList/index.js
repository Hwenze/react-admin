import React,{Component,Fragment} from 'react';
import SearchFrom from '../../../components/SearchFrom';
import TableFrom from '../../../components/Table';
import tableList from './data';
import Dialog from '../../../components/Dialog';
import {
  Icon,
  Switch,
  Divider,
} from 'antd'
const searchFrom = [
  {
    type:'input',
    value:'',
    label:'Category'
  },
  {
    type:'select',
    value:'',
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
    type:'input'
  },
  {
    label:'Product Name',
    value:'',
    type:'input'
  },
]
class List extends Component{
  constructor(props){
    super(props)
    this.state={
      dialog:false,
      bigImageSrc:'',
    }
  }
  openDetails=(item)=>{
    console.log(item);
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
        render:(text,record)=>(
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
          <Switch size="small" defaultChecked={record.status==1?true:false} />
        )
      },
      {
        title:'Action',
        dataIndex:'action',
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
      <Fragment>
        <SearchFrom data={searchFrom} search={this.search}/>
        <div className="main-wrapper">
          <TableFrom rowKey={(r,i)=>(i)} data={tableList} col={col} ></TableFrom>
        </div>
        <Dialog footer={null} dialog={this.state.dialog} result={this.result} component={
          <div style={{width:'100%'}}>
            <img style={{width:'100%',height:'auto'}} src={this.state.bigImageSrc}/>
          </div>
        }/>
      </Fragment>
    )
  }
}
export default List;