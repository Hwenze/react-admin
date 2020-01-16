import React,{Component} from 'react';
import SearchFrom from '../../../components/SearchFrom';
import TableFrom from '../../../components/Table';
import tableList from './data';
import Dialog from '../../../components/Dialog';
import {
  Icon,
  Divider
} from 'antd';
import { FromItem } from '../../../components/FromItem';
class MemberReview extends Component{
  constructor(props){
    super(props);
    this.state={
      dialog:false,
      currentData:{},
    }
  }
  openDetails=(item)=>{
    this.setState({
      dialog:true,
      currentData:item
    })
  }
  search=(data)=>{
    console.log(data);
  }
  reviewDetails=()=>{
    let result = [];
    for (const key in this.state.currentData) {
      if (this.state.currentData.hasOwnProperty(key)) {
        const value = this.state.currentData[key];
        result.push(<FromItem style={{width:'300px'}} key={key} label={`${key}：`} component={value}></FromItem>)
      }
    }
    return result;
  }
  result=(type)=>{
    this.setState({
      dialog:false,
      currentData:{}
    })
  }
  render(){
    const searchFrom = [
      {
        label:'Country',
        type:'country',
        key:'countryCode',
        value:'CN'  
      },
      {
        label:'Username',
        type:'input',
        key:'username',
        value:'',
        placeholder:'Please enter...'
      },
      {
        type:'select',
        value:'',
        label:'Review Status',
        key:'reviewStatus',
        data:[
          {
            label:'Pending Review',
            value:'1',
          },
          {
            label:'Successful Review',
            value:'2',
          },
          {
            label:'Review Failure',
            value:'0',
          },
        ]
      },
    ]
    const col = [
      {
        title:'ID',
        dataIndex:'id',
        key:'id',
      },
      {
        title:'Name',
        dataIndex:'username',
        key:'username',
      },
      {
        title:'Phone',
        dataIndex:'mobile',
        key:'mobile',
      },
      {
        title:'Status',
        dataIndex:'status',
        key:'status',
        render: (text, record) => (
          <span>
            {record.status==1?
            <Icon style={{color:'green'}} type="check-circle" />:
            <Icon style={{color:'red'}} type="close-circle" />}
          </span>
        ),
      },
      {
        title:'Review Time',
        dataIndex:'reviewerTime',
        key:'reviewerTime',
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
      <div>
        <SearchFrom data={searchFrom} search={this.search}/>
        <div className="main-wrapper">
          <TableFrom rowKey={(r,i)=>(i)} data={tableList} col={col} ></TableFrom>
        </div>
        <Dialog 
          width="800px"
          dialog={this.state.dialog} 
          result={this.result}
          component={
            <div className="j-from" style={{maxHeight:'60vh',overflow:'auto'}}>
              {this.reviewDetails()}
            </div>
          } 
          title="Business Application"></Dialog>
      </div>
    )
  }
}
export default MemberReview;