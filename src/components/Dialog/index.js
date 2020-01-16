import { Modal, Button } from 'antd';
import React,{Component} from 'react';
class Dialog extends Component{
  constructor(props){
    super(props);
  }
  btn=(result)=>{
    this.props.result(result);
  }
  render(){
    return(
      <Modal 
        width={this.props.width?this.props.width:'600px'}
        visible={this.props.dialog}
        footer={this.props.footer}
        title={this.props.title?this.props.title:''}
        onOk={()=>{this.btn('ok')}}
        onCancel={()=>{this.btn('cancel')}}>
          {this.props.component}
      </Modal>
    ) 
  }
}
export default Dialog;