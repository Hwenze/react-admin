import React,{Component,Fragment} from 'react';
import {FromItem} from '../../../components/FromItem';
import {
  UserWrapper,
  UserFrom
} from './style';
import { 
  Input ,
  Avatar, 
  Tag
} from 'antd';
import Select from '../../../components/Select';
class Details extends Component{
  constructor(props){
    super(props);
    this.state={
      fromData:{
        username:'FHK',
        gender:'1',
        phone:'',
        countryCode:'',
        City:'',
        Note:''
      },
    }
  }
  render(){
    const gender = [
      {
        label:'Male ♂ ',
        value:'1',
      },
      {
        label:'Female ♀ ',
        value:'0',
      },
    ];
    const fromData = [
      {
        label:'Username',
        component:<Input value={this.state.fromData.username} placeholder="Please input username..."></Input>
      },
      {
        label:'Gender',
        component:<Select value={this.state.fromData.gender} option={gender}></Select>
      },
    ]
    return(
      <div className="m-15">
        <UserWrapper>
          <Avatar style={{ backgroundColor: '#87d068' ,marginRight:'10px'}} icon="user" />
          <span>ID:1117101<Tag style={{marginLeft:'10px'}}>VIP</Tag></span>
        </UserWrapper>
        <UserFrom className="j-from flex-column">
          {fromData.map((item,index)=>{
            return <FromItem style={{'width':'300px'}} label={item.label} index={index} component={item.component}></FromItem>
          })} 
        </UserFrom>
      </div>
    )
  }
}
export default Details;