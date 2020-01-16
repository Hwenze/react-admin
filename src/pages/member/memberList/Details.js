import React,{Component,Fragment} from 'react';
import {FromItem} from '../../../components/FromItem';
import Country from '../../../components/Country';
import moment from 'moment';
import {connect} from 'react-redux';
import Result from '../../../components/Result';
import {
  UserWrapper,
  UserFrom
} from './style';
import { 
  DatePicker,
  Input ,
  Avatar, 
  Tag,
  Button
} from 'antd';
import Select from '../../../components/Select';
import TextArea from 'antd/lib/input/TextArea';
class Details extends Component{
  constructor(props){
    super(props);
    this.state={
      resultStatus:false,
    }
  }
  changeCountry=(value)=>{
    console.log(value);
  }
  closeResult=()=>{
    this.setState({
      resultStatus:false
    })
  }
  submit=()=>{
    this.setState({
      resultStatus:true
    })
  }
  render(){
    const selectData = {
      gender:[
        {
          label:'Male',
          value:'1',
        },
        {
          label:'Female',
          value:'0',
        },
      ],
      sellerType:[
        {
          label:'线上卖家',
          value:'online'
        },
        {
          label:'线下实体店',
          value:'underline'
        }
      ],
      shopSite:[
        {
          label:'年入百万',
          value:'100'
        },
        {
          label:'年入十万',
          value:'10'
        },
      ]
    }
    const fromData = [
      {
        label:'Username',
        component:<Input value={this.props.fromData.username} placeholder="Please input username..."></Input>
      },
      {
        label:'Phone',
        component:<Input value={this.props.fromData.phone}></Input>
      },
      {
        label:'Gender',
        component:<Select width="180px" value={this.props.fromData.gender} option={selectData.gender}></Select>
      },
      {
        label:'Country',
        component:<Country width="180px" value={this.props.fromData.countryCode} changeCountry={()=>{
          this.changeCountry()
        }}/>
      },
    ]
    const shopFrom =[
      {
        label:'Seller Since',
        component:<DatePicker defaultValue={moment(this.props.fromData.sellerSince)} />
      },
      {
        label:'Seller Type',
        component:<Select value={this.props.fromData.sellerType} option={selectData.sellerType}></Select>
      },
      {
        label:'Shop Site',
        component:<Select value={this.props.fromData.shopSite} option={selectData.shopSite}/>
      },
      {
        label:'Address',
        component:<Input value={this.props.fromData.address}/>
      },
      {
        label:'Traffic Or Follower',
        component:<Input value={this.props.fromData.trafficOrFollower}/>
      },
    ]
    return(
      <div className="m-15">
        <UserWrapper>
          <Avatar style={{ backgroundColor: '#87d068' ,marginRight:'10px'}} icon="user" />
          <span>ID:{this.props.fromData.id}<Tag style={{marginLeft:'10px'}}>{this.props.fromData.level}</Tag></span>
        </UserWrapper>
        <UserFrom className="j-from flex-column">
          {fromData.map((item,index)=>{
            return <FromItem 
              key={index} 
              style={{'width':'300px','marginRight':'20px'}} 
              label={item.label} 
              index={index} 
              component={item.component}>
            </FromItem>
          })} 
        <FromItem 
          style={{'width':'100%'}} 
          label='Note' 
          component={<TextArea style={{width:'400px'}} value={this.props.fromData.note} />}>
        </FromItem>
        </UserFrom>
        <UserFrom className="j-from">
          {shopFrom.map((item,index)=>{
            return <FromItem 
              key={index} 
              style={{'width':'400px','marginRight':'20px'}} 
              label={item.label} 
              labelWidth='120px'
              index={index} 
              component={item.component}>
            </FromItem>
          })} 
        </UserFrom>
        <Button style={{marginTop:'16px'}} size="large" onClick={this.submit}>Submit</Button>
        {this.state.resultStatus?
          <Result code="404" closeResult={this.closeResult}/>
        :''}
      </div>
    )
  }
}
const toState=(state)=>{
  return{
    fromData:state.member.userInfo
  }
}
const toProps=(dispatch)=>{
  return{
    changeName(e){
      
    },
    changePhone(e){

    },
    changeGender(e){

    },
    changeNote(e){

    },
  }
}
export default connect(toState,toProps)(Details);