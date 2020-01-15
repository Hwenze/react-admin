import React,{Component} from 'react';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import Breadcrumb from './component/Breadcrumb';
import { withRouter } from 'react-router-dom';
class Layout extends Component{
  constructor(props){
    super(props)
    this.state={
      path:{}
    }
  }
  render(){
    return(
      <div className="j-layout">
        {/* 侧边栏菜单 */}
        <div className="j-layout-sidebar">
          <Sidebar/>
        </div>
        {/* 内容展示区域 */}
        <div className="j-layout-main">
          <Breadcrumb />
          <Main></Main>
        </div>
      </div>
    )
  }
}
export default withRouter(Layout);