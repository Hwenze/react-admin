import React,{Component,Fragment} from 'react';
import { Breadcrumb as Bread } from 'antd';
import { Link,withRouter } from 'react-router-dom';
import routes from '../../../router';
const { Item } = Bread;
class Breadcrumb extends Component{
  constructor(props){
    super(props);
    const index = this.getCurrentRoute(this.props.location.pathname);
    const resultAllRoter = this.getAllRoute(routes[index]);
    this.state={
      currentPath:routes[index],
      currentArr:resultAllRoter
    }
  }
  componentDidMount(){
    console.log(this.props.location.pathname)
  }
  getAllRoute=(data)=>{
    let arr = [];
    const getRoute = (data)=>{
      if(data.children && data.children.length>0){
        arr.push(data);
        data.children.map(item=>{
          getRoute(item);
        })
      }else{
        arr.push(data); 
      }
    }
    getRoute(data);
    return arr;
  }
  componentWillReceiveProps(nextProps){
    const index = this.getCurrentRoute(nextProps.location.pathname);
    this.setState({
      currentPath:routes[index],
      currentArr:this.getAllRoute(routes[index])
    })
  }
  getCurrentRoute=(pathname)=>{
    const pathArr = (pathname.split('/')).splice(1);
    let current = routes.findIndex(item=>{
      return item.path === '/'+pathArr[0]
    });
    current = current!=-1?current:0;
    return current;
  }
  getLastPath=(parent,child)=>{
    const INDEX = child.lastIndexOf(':');
    child = INDEX!=-1?(child).substr(0,INDEX-1):child;
    let STR = '';
    if(parent==child){
      STR=false;
    }else{
      STR=parent+child;
    }
    return STR;
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
        {this.state.currentArr.map(item=>{
          return(
            <Fragment key={item.path}>
              {
                this.props.location.pathname.indexOf(this.getLastPath(this.state.currentPath.path,item.path))!=-1
                &&<Item>
                  <Link className="bread-item" to={item.path}>{item.title}</Link>
                </Item>
              }
            </Fragment>
          )
        })}
      </Bread>
    )
  }
}
export default withRouter(Breadcrumb);