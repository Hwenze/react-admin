import React from 'react';
import { Switch ,BrowserRouter} from 'react-router-dom';
import loadComponent from './loadComponent';
import JRouter from './createRoute';

const Home = loadComponent(()=>import('../../../pages/home/index'));

// product 
const ProductList = loadComponent(()=>import('../../product/product/List.js'));
const ProductDetails = loadComponent(()=>import('../../../pages/product/product/Details'));

const Main = ()=>{
  return(
    <Switch>
      <JRouter exact path='/home' component={Home}/>
      {/* member */}
      
      {/* product */}
      <JRouter exact path='/product/list' component={ProductList}/>
      <JRouter exact path='/product/details/id' component={ProductDetails}/>
    </Switch>
)};
export default Main;