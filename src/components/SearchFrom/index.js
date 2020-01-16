import React, { Component } from 'react';
import Country from '../Country';
import { 
  Select ,
  Input ,
  Button ,
  DatePicker  ,
  notification, 
} from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class SearchFrom extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:this.props.data,
      fromData:{}
    }
  }
  // 搜索方案 回调方案
  search=()=>{
    let message = [];
    for (const key in this.state.fromData) {
      if (this.state.fromData.hasOwnProperty(key)) {
        message.push(
        <p key={key} style={{marginBottom:'4px',marginLeft:'16px'}}>
          {key}:<span style={{color:'red'}}>{this.state.fromData[key]}</span>
        </p>)
      }
    }
    notification.open({
      message: 'Your Search Result',
      description:message,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
    
    // this.props.search(this.state.fromData);
  }
  // 初始化头部值
  componentWillMount(){
    let fromData = {};
    for(let i = 0 ; i < this.state.data.length; i++){
      fromData[this.state.data[i].key] = this.state.data[i].value?this.state.data[i].value:'';
    }
    if(this.state.fromData['country']){
      this.changeCountry(this.state.fromData['country']);
    }
    this.setState({
      fromData:fromData
    })
  }
  //----------------------methods---------------------------------------------------------------------------
  // 切换国家
  changeCountry=(code)=>{
    let from = this.state.fromData;
    this.setState({
      fromData:{...from,countryCode:code}
    })
  }
  // 下拉框操作
  changeSelect=(k,v)=>{
    let fromData = this.state.fromData;
    fromData[k] = v;
    this.setState({
      fromData:fromData
    })
  }
  // 输入框操作
  changeInput=(k,v)=>{
    let fromData = this.state.fromData;
    fromData[k] = v.target.value;
    this.setState({
      fromData:fromData
    })
  }
  // 时间选择器操作
  changePicker=(k,v)=>{
    let fromData = this.state.fromData;
    if(v){
      fromData[k] = v.map(item=>item._d);
    }
    this.setState({
      fromData:fromData
    })
  }
  //----------------------组件渲染---------------------------------------------------------------------------
  // 表单子节点
  renderFromItem=(label,index,component)=>{
    return(
      <div className="j-from-item" key={index}>
        <div className="j-from-item-label">{label}</div>
        <div className="j-from-item-content">{component}</div>
      </div>
    )
  }
  // 下拉框
  renderSelect=(data)=>{
    return( 
      <Select defaultValue={this.state.fromData[data.key]} 
        style={{ width: '180px' }} 
        onChange={
          (item)=>{this.changeSelect(data.key,item)}
        }>
        {data.data.map(item=>{
          return(
            <Select.Option 
              key={item.value} 
              value={item.value} 
              disabled={item.disabled}>
            {item.label}</Select.Option>
          )
        })}
      </Select> 
    )
  }
  // Picker日期选择器
  renderPicker=(data,type="pricker")=>{
    switch(type){
      case 'datePicker': // 日期选择器
        return(
          <DatePicker onChange={(item)=>{
            this.changePicker(data.key,item)
          }} />
        )
      case 'monthPicker': // 月选择器
        return(
          <MonthPicker onChange={(item)=>{
            this.changePicker(data.key,item)
          }} />
        )
      case 'weekPicker': //  周选择器
        return(
          <WeekPicker onChange={(item)=>{
            this.changePicker(data.key,item)
          }} />
        )
      default: //  范围选择器
        return(
          <RangePicker onChange={(item)=>{
            this.changePicker(data.key,item)
          }} />
        )
      
    }
    
  }
  // Input输入框
  renderInput=(data)=>{
    return(
      <Input 
        onChange={(item)=>{
          this.changeInput(data.key,item)
        }}
        placeholder={data.placeholder?data.placeholder:'Please enter ...'} 
      />  
    )
  }
  render(){
    return(
      <div className="j-from j-header">
        {this.state.data.map((item,index)=>{
          switch(item.type){
            case 'country': // 下拉框
              return this.renderFromItem(item.label,index,<Country width="180px" changeCountry={this.changeCountry}/>)
            case 'select': // 下拉框
              return this.renderFromItem(item.label,index,this.renderSelect(item))
            case 'input': //  输入框
              return this.renderFromItem(item.label,index,this.renderInput(item))
            case 'pricker': //  区间日期选择器
              return this.renderFromItem(item.label,index,this.renderPicker(item))  
            case 'monthPicker': //  月份选择器
              return this.renderFromItem(item.label,index,this.renderPicker(item,'monthPicker'))  
            case 'dataPicker': //  单天日期选择器
              return this.renderFromItem(item.label,index,this.renderPicker(item,'dataPicker'))  
            case 'weekPicker': //  周选择器
              return this.renderFromItem(item.label,index,this.renderPicker(item,'weekPicker'))  
          }
        })}
        <div className="j-from-item w100">
          <Button className="j-btn" style={{'marginRight':'12px'}} shape="round" onClick={this.search}>Search</Button>
          <Button className="j-btn" style={{'marginRight':'12px'}} shape="round" >Clear</Button>
        </div>
      </div>
    )
  }
}
export default SearchFrom;