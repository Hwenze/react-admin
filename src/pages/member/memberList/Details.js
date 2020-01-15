import React,{Component} from 'react';
import { 
  Input ,
  Avatar 
} from 'antd';
class Details extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
         <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
      </div>
    )
  }
}
export default Details;