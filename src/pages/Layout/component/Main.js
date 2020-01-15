import React,{Component} from 'react';
import { Switch,Route } from 'react-router-dom';
import routes from '../../../router';
import JRouter from './createRoute';
class Main extends Component{
  constructor(props){
    super(props);
  }
  getRoutePage=(route,result)=>{
    route.map(item=>{
      if(item.children && item.children.length>0){
        result.push(<JRouter key={item.path} exact path={item.path} props={item} component={item.component}/>)
        this.getRoutePage(item.children,result)
      }else{
        result.push(<JRouter key={item.path} exact path={item.path} props={item} component={item.component}/>)
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
        {/* <JRouter exact path='/member/list' component={Member}/>
        <JRouter exact path='/member/details/:id' component={Details}/> */}
        {/* product */}
        {/* <JRouter exact path='/product/list' component={ProductList}/>
        <JRouter exact path='/product/details/id' component={ProductDetails}/> */}
      </Switch>
    )
  }
};
export default Main;