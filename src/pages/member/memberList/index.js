import React,{Component} from 'react';
import SearchFrom from '../../../components/SearchFrom';
import TableFrom from '../../../components/Table';
import { Divider , Icon} from 'antd';
const searchFrom = [
  {
    key:'countryCode',
    type:'select',
    label:'Country',
    value:'CN',
    data:[
      {
        label:'China',
        value:'CN'
      },
      {
        label:'USA',
        value:'US',
        disabled:true,
      },
    ]
  },
  {
    key:'orderId',
    type:'input',
    label:'Order ID', 
  },
  {
    key:'username',
    type:'input',
    label:'Username', 
    placeholder:'搜索框空白内容'
  },
  {
    key:'createTime',
    type:'monthPicker',
    label:'Create Time'
  }
];
const tableList = [
  {
    name:'FHK',
    age:'24',
    sex:'♂',
    id:"1",
    phone:'13226627208',
    time:'2020-1-15 20:50'
  },
  {
    name:'xxx',
    age:'22',
    sex:'♂',
    id:"2",
    phone:'13226627208',
    time:'2020-1-15 20:50'
  },
  {
    name:'Joker',
    age:'24',
    sex:'♀',
    id:"3",
    phone:'13226627208',
    time:'2020-1-15 20:50'
  },
  {
    name:'小饭',
    age:'16',
    sex:'♂',
    id:"4",
    phone:'13226627208',
    time:'2020-1-15 20:50'
  },
]


class Member extends Component{
  constructor(props){
    super(props);
  }
  search=(fromData)=>{
    console.log(fromData);
  }
  openDetails=(record)=>{
    this.props.history.push(`/member/details/${record.id}`)
  }
  render(){
    const col = [
      {
        title:'ID',
        dataIndex:'id',
        key:'id',
      },
      {
        title:'Name',
        dataIndex:'name',
        key:'name',
      },
      {
        title:'Phone',
        dataIndex:'phone',
        key:'phone',
      },
      {
        title:'Age',
        dataIndex:'age',
        key:'age',
      },
      {
        title:'Sex',
        dataIndex:'sex',
        key:'sex',
      },
      {
        title:'Action',
        dataIndex:'action',
        key:'action',
        render: (text, record) => (
          <span>
            <Icon type="edit" onClick={()=>{this.openDetails(record)}}/>
            <Divider type="vertical" />
            <Icon type="delete"></Icon>
          </span>
        ),
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
export default Member;