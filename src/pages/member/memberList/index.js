import React,{Component} from 'react';
import SearchFrom from '../../../components/SearchFrom';
import TableFrom from '../../../components/Table';
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
    key:1,
  },
  {
    name:'xxx',
    age:'22',
    sex:'♂',
    key:2,
  },
  {
    name:'Joker',
    age:'24',
    sex:'♀',
    key:3,
  },
  {
    name:'小饭',
    age:'16',
    sex:'♂',
    key:4,
  },
]
const col = [
  {
    title:'Name',
    dataIndex:'name',
    key:'name',
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
]
class Member extends Component{
  constructor(props){
    super(props);
  }
  search=(fromData)=>{
    console.log(fromData);
  }
  render(){
    return(
      <div>
        <SearchFrom data={searchFrom} search={this.search}/>
        <div className="main-wrapper">
          <TableFrom data={tableList} col={col} ></TableFrom>
        </div>
      </div>
    )
  }
}
export default Member;