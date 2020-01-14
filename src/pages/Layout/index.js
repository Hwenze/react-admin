import React,{Component} from 'react';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import { BrowserRouter } from 'react-router-dom';
class Layout extends Component{
  render(){
    return(
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
}
export default Layout;