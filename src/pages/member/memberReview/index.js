import React,{Component} from 'react';
import SearchFrom from '../../../components/SearchFrom';
import TableFrom from '../../../components/Table';
import tableList from './data';
import {
  Icon,
  Divider
} from 'antd';
class MemberReview extends Component{
  constructor(props){
    super(props);
  }
  openDetails=(item)=>{
    console.log(item);
  }
  search=(data)=>{
    console.log(data);
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
      </div>
    )
  }
}
export default MemberReview;