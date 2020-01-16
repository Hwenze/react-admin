import React,{Component,Fragment} from 'react';
import {FromItem} from '../../../components/FromItem';
import {withRouter} from 'react-router-dom'
import Country from '../../../components/Country';
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
      fromData:{
        username:'FHK',
        gender:'1',
        phone:'',
        countryCode:'',
        Note:'',
        sellerType:'',
        sellerSince:'',
        address:'',
        shopSite:'',
        trafficOrFollower:''
      },
    }
  }
  changeCountry=(value)=>{
    console.log(value);
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
        component:<Input value={this.state.fromData.username} placeholder="Please input username..."></Input>
      },
      {
        label:'Phone',
        component:<Input value={this.state.fromData.phone}></Input>
      },
      {
        label:'Gender',
        component:<Select width="180px" value={this.state.fromData.gender} option={selectData.gender}></Select>
      },
      {
        label:'Country',
        component:<Country width="180px" value={this.state.fromData.countryCode} changeCountry={()=>{
          this.changeCountry()
        }}/>
      },
    ]
    const shopFrom =[
      {
        label:'Seller Since',
        component:<DatePicker />
      },
      {
        label:'Seller Type',
        component:<Select value={this.state.fromData.SellerType} option={selectData.sellerType}></Select>
      },
      {
        label:'Shop Site',
        component:<Select value={this.state.fromData.shopSite} option={selectData.shopSite}/>
      },
      {
        label:'Address',
        component:<Input value={this.state.fromData.address}/>
      },
      {
        label:'Traffic Or Follower',
        component:<Input value={this.state.fromData.trafficOrFollower}/>
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
          component={<TextArea style={{width:'400px'}} value={this.state.fromData.note} />}>
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
        <Button style={{marginTop:'16px'}} size="large">Submit</Button>
      </div>
    )
  }
}
export default withRouter(Details);