import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import { router } from '../menu';
import {
  MenuLogo,
} from './style';
class Sidebar extends Component{
  constructor(props){
    super(props)
  }
  getMenu(){
    return(
      <Menu 
        mode="inline"
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
                    <Menu.Item key={citem.path}>{citem.title}</Menu.Item>
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
        <MenuLogo>Joker</MenuLogo>
        {this.getMenu()}
      </div>
    )
  }
}
export default Sidebar;