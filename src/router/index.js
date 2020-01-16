

// import Member from '../pages/member/memberList/index';
// import Details from '../pages/member/memberList/Details';
// import Home from '../pages/home/index';
import loadComponent from '../pages/Layout/component/loadComponent';

const Home = loadComponent(()=>import('../pages/home/index'));
// member
const Member = loadComponent(()=>import('../pages/member/memberList/index'));
const Review = loadComponent(()=>import('../pages/member/memberReview/index'));

const Details = loadComponent(()=>import('../pages/member/memberList/Details'));
const ProductList = loadComponent(()=>import('../pages/product/productList'));
const ProductDetails = loadComponent(()=>import('../pages/product/productList/Details'));

const routes = [
  { 
    title:'Home',
    path:'/',
    icon:'home',
    component:Home,
    bread:'home',
    name:'home',
    hide:false,
  },
  {
    title:'Member',
    path:'/member',
    icon:'user',
    component:Member,
    bread:'/member',
    redirect:'/member/list',
    name:'member',
    hide:false,
    children:[
      {
        title:'Member List',
        path:'/list',
        icon:'',
        name:'member-list',
        bread:'/member/list',
        hide:false,
        component:Member,
      },
      {
        title:'Member Details',
        path:'/details/:id',
        icon:'',
        bread:'/member/details',
        name:'member-details',
        hide:true,
        component:Details,
      },
      {
        title:'Member Review',
        path:'/review',
        icon:'',
        bread:'/member/review',
        name:'member-review',
        hide:false,
        component:Review,
      },
    ]
  },
  {
    title:'Product',
    path:'/product',
    icon:'shopping',
    name:'product',
    bread:'/product/list',
    component:ProductList,
    children:[
      {
        title:'Product List',
        path:'/list',
        icon:'',
        name:'product-list',
        bread:'/product/list',
        component:ProductList,
        children:[]
      },
    ]
  }
]

export default routes;