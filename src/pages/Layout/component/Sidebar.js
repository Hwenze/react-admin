import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import { router } from '../menu';
import {Link,Router} from 'react-router-dom'
import {
  MenuLogo,
} from './style';
class Sidebar extends Component{
  constructor(props){ 
    super(props)
    this.state={
      openKeys:[]
    }
  }
  onOpenChange=(keys)=>{
    const lastMenu = keys.find(item=>this.state.openKeys.indexOf(item)==-1);
    this.setState({
      openKeys:lastMenu?[lastMenu]:[]
    })
  }
  getMenu(){
    return(
      <Menu 
        theme="dark"
        mode="inline"
        onOpenChange={this.onOpenChange}
        openKeys={this.state.openKeys}
        className="menu-container"
      >
        {router.map((item,index)=>{
          return(
            <Menu.SubMenu 
              key={item.path}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
              }
            >
              {
                item.children.map((citem)=>{
                  return(
                    <Menu.Item key={citem.path} >
                      <Link to={citem.path}>{citem.title}</Link>
                    </Menu.Item>
                  )
                })
              }
            </Menu.SubMenu>
          )
        })}
      </Menu>
    )
  }
  render(){
    return(
      <div>
        <MenuLogo>OPSHOP</MenuLogo>
        {this.getMenu()}
      </div>
    )
  }
}
export default Sidebar;