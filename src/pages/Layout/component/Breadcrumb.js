import React,{Component,Fragment} from 'react';
import { Breadcrumb as Bread } from 'antd';
import { Link,withRouter } from 'react-router-dom';
import routes from '../../../router';
const { Item } = Bread;
class Breadcrumb extends Component{
  constructor(props){
    super(props);
    const index = this.getCurrentRoute(this.props.location.pathname);
    this.state={
      currentPath:routes[index]
    }
  }
  componentWillReceiveProps(nextProps){
    const index = this.getCurrentRoute(nextProps.location.pathname);
    this.setState({
      currentPath:routes[index]
    })
  }
  forI=(arr,max)=>{
    let str = '';
    for(let i = 0 ; i <= max;i++){
      if(i == max){
        str+=arr[i];
      }else{
        str+='/'+arr[i]+'/';
      }
    }
    return str;
  } 
  getRouteStr=(pathArr)=>{
    let arr = [];
    pathArr.map((item,index)=>{
      if(index == 0){
        arr.push({
          path:'/'+item,
        });
      }else{
        arr.push(this.forI(pathArr,index));
      }
    })
    return arr;
  }
  getCurrentRoute=(pathname)=>{
    const pathArr = (pathname.split('/')).splice(1);
    let current = routes.findIndex(item=>{
      return item.path === '/'+pathArr[0]
    });
    current = current!=-1?current:0;
    return current;
  }
  render(){
    return(
      <Bread style={{
          'background': '#2a313c82',
          'padding': '5px 10px',
          }}>
        <Item>
          <Link className="bread-item" to='/'>Home</Link>
        </Item>
        <Item>
          <Link className="bread-item" to={this.state.currentPath.path}>{this.state.currentPath.title}</Link>
        </Item>
        {this.state.currentPath.children && this.state.currentPath.children.map(item=>{
          return(
            <Fragment>
              <Item>
                <Link className="bread-item" to={item.path}>{item.title}</Link>
              </Item>
            </Fragment>
          )
        })}
      </Bread>
    )
  }
}
export default withRouter(Breadcrumb);