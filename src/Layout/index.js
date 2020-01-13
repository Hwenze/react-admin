import React,{Component} from 'react';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
class Layout extends Component{
  render(){
    return(
      <div className="j-layout">
        {/* 侧边栏菜单 */}
        <div className="j-layout-sidebar">
          <Sidebar/>
        </div>
        {/* 内容展示区域 */}
        <div className="j-layout-main">
          <Main></Main>
        </div>
      </div>
    )
  }
}
export default Layout;