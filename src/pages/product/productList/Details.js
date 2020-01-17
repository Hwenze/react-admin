import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {Info,InfoItem} from './style';
import {withRouter } from 'react-router-dom';
import Card from '../../../components/Card';
import { FromItem } from '../../../components/FromItem';
import { Input, Tag } from 'antd';
import Select from '../../../components/Select';
import productList from './data'; // 假数据
import action from '../state/action';
import Result from '../../../components/Result';
const selectData = {
  title:[
    {
      label:'Chinese',
      value:'title_zh',
      language:'Chinese',
    },
    {
      label:'English',
      value:'title',
      language:'English',
    },
    {
      label:'Thai',
      value:'title_th',
      language:'Thai',
    },
  ]
}
class Details extends Component{
  constructor(props){
    super(props)
    this.state={
      title:'title_zh',
      loadFails:false,
    }
  }
  changeTitleContry=(d)=>{
    this.setState({
      title:d
    })
  }
  componentDidMount(){
    this.changeTitleContry('title_zh');
    if(this.props.productInfo.id==''){
      const INDEX = productList.findIndex(item=>item.id==this.props.match.params.id);
      if(INDEX!=-1){  
        this.props.changeProdcutInfo(productList[INDEX]);
      }else{
        this.setState({
          loadFails:true
        })
      }
    }
  }
  closeResult=()=>{
    this.props.history.push(`/product/list`)
  }
  renderImage=()=>{
    return(
      <Card width='300px' style={{}} title='Product Images' component={
        <div style={{width:'100%',height:'100%'}}>
          <img className="img" src={this.props.productInfo.mainImage}/>
        </div>
      }></Card>
    )
  }
  renderInfo=()=>{
    const info = [
      {
        label:'Product ID：',
        value:'id',
        component:(this.props.productInfo.id)
      },
      {
        label:'Platfrom：',
        value:'from',
        component:(
          <span>
            <Tag>{this.props.productInfo.from}</Tag>
            <Tag>{this.props.productInfo.from_shop_id}</Tag>
          </span>
        )
      },
      {
        label:'From URL',
        value:'from_url',
        component:(this.props.productInfo.from_url)
      },
      {
        label:'Create Time：',
        value:'create_time',
        component:(this.props.productInfo.create_time)
      },
      {
        label:'Update Time：',
        value:'update_time',
        component:(this.props.productInfo.update_time)
      },
    ]
    const price = [
      {
        label:'USA:$',
        value:'priceRange',
        component:(this.props.productInfo.priceRange)
      },
      {
        label:'China:￥',
        value:'price_range_cn',
        component:(this.props.productInfo.price_range_cn)
      },
      {
        label:'Thailand:฿',
        value:'price_range_th',
        component:(this.props.productInfo.price_range_th)
      },
    ]
    return(
      <Card style={{}} title='Product Information' component={
        <Fragment>
          <FromItem style={{display: 'block',fontWeight:'600'}} labelWidth="100%" label='Basic Info' component={
            info.map((item,index)=>{
              return <FromItem 
                key={index}
                style={{padding:0,marginLeft:'10px',fontWeight:'400',lineHeight: '30px'}} 
                label={item.label} component={item.component}></FromItem>
            })
          }></FromItem>
          <FromItem style={{display: 'block',fontWeight:'600'}} labelWidth="100%" label='Title' component={
            <Fragment>
              <Select value="title_zh" onChange={this.changeTitleContry} option={selectData.title}></Select>
              <Input value={this.props.productInfo[this.state.title]}></Input>
            </Fragment>
          }></FromItem>
          <FromItem 
            style={{display: 'block',overflow: 'hidden',fontWeight:'600'}} 
            labelWidth="100%" label='Price' 
            component={
              price.map((item,index)=>{
                return <FromItem 
                  key={index}
                  style={{float: 'left',width:'200px',padding:0,marginLeft:'10px',fontWeight:'400',lineHeight: '30px'}} 
                  label={item.label} component={item.component}></FromItem>
              })}></FromItem>
        </Fragment>
      }></Card>
    )
  }
  render(){
    return(
      <Fragment>
        <Info>
          <InfoItem>
            {this.renderImage()}
          </InfoItem>
          <InfoItem style={{flex:1}}>
            {this.renderInfo()}
          </InfoItem>
        </Info>
        {this.state.loadFails&&<Result code="502" message="找不到该ID" closeResult={this.closeResult}/>}
      </Fragment>
    )
  }
}
const toState = (state)=>{
  return{
    productInfo : state.product.productInfo
  }
}
const toProps = (dispatch)=>{
  return{
    changeProdcutInfo(value){
      dispatch(action.CHANEG_PRODUCT_INFO(value))
    }
  }
}
export default connect(toState,toProps)(withRouter(Details));