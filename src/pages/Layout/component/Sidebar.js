import React,{Component} from 'react';
import { Menu, Icon, Avatar } from 'antd';
import routes from '../../../router';
import {Link} from 'react-router-dom'
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
        {routes.map((item,index)=>{
          return(
            item.children?
            <Menu.SubMenu 
              key={item.path}
              title={
                <span>
                  {item.icon&&<Icon type={item.icon} />}
                  <span>{item.title}</span>
                </span>
              }
            >
              {
                item.children.map((citem)=>{
                  return(
                    !citem.hide?
                    <Menu.Item key={(item.path?item.path:'')+citem.path} >
                      <Link to={(item.path?item.path:'')+citem.path}>{citem.title}</Link>
                    </Menu.Item>
                    :''
                  )
                })
              }
            </Menu.SubMenu>
            :
            !item.hide?
            <Menu.Item key={item.path} >
              <Link to={item.path}>
                <span>
                  {item.icon&&<Icon type={item.icon} />}
                  <span>{item.title}</span>
                </span>
              </Link>
            </Menu.Item>
            :''
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
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
      </div>
    )
  }
}
export default Sidebar;