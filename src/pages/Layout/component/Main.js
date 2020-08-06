import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import routes from '../../../router';
import JRouter from './createRoute';
class Main extends Component{
  constructor(props){
    super(props);
  }
  getRoutePage=(route,result,path)=>{
    route.map(({component:Component,...item})=>{
      if(item.children && item.children.length>0){
        result.push(<JRouter key={(path?path:'')+item.path} exact path={(path?path:'')+item.path} props={item} component={Component}/>)
        this.getRoutePage(item.children,result,item.path)
      }else{
        result.push(<JRouter key={(path?path:'')+item.path} exact path={(path?path:'')+item.path} props={item} component={Component}/>)
        // result.push(<JRouter key={path+'/'+item.path} exact path={path+'/'+item.path} props={item} component={Component}/>)
      }
    })
  }
  render(){
    let result = [];
    this.getRoutePage(routes,result)
    return(
      <Switch>
        {result}
        {/* {this.getRoutePage(routes)} */}
        {/* <JRouter ></JRouter>
        <JRouter exact path='/home' component={Home}/> */}
        {/* member */}
         {/* <JRouter exact path='/member/list' component={Member}/> */}
         {/* <Route path='/member/details/:id' render={props =><Details {...props}/>}/> */}
        {/* <JRouter exact path='/member/details/:id' component={Details}/>  */}
        {/* product */}
        {/* <JRouter exact path='/product/list' component={ProductList}/>
        <JRouter exact path='/product/details/id' component={ProductDetails}/> */}
      </Switch>
    )
  }
};
export default Main;