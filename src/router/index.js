

// import Member from '../pages/member/memberList/index';
// import Details from '../pages/member/memberList/Details';
// import Home from '../pages/home/index';
import loadComponent from '../pages/Layout/component/loadComponent';

const Home = loadComponent(()=>import('../pages/home/index'));
// member
const Member = loadComponent(()=>import('../pages/member/memberList/index'));

const Details = loadComponent(()=>import('../pages/member/memberList/Details'));
const ProductList = loadComponent(()=>import('../pages/product/productList/List'));
const ProductDetails = loadComponent(()=>import('../pages/product/productList/Details'));

const routes = [
  { 
    title:'Home',
    path:'/',
    icon:'home',
    component:Home,
    name:'home',
  },
  {
    title:'Member',
    path:'/member',
    icon:'user',
    component:Member,
    redirect:'/member/list',
    name:'member',
    children:[
      {
        title:'Member List',
        path:'/member/list',
        icon:'',
        name:'member-list',
        component:Member,
        children:[
          {
            title:'Member Details',
            path:'/member/details',
            icon:'',
            name:'member-details',
            component:Details,
          }
        ]
      },
    ]
  },
  {
    title:'Product',
    path:'/product',
    icon:'shopping',
    name:'product',
    component:ProductList,
    children:[
      {
        title:'Product List',
        path:'/product/list',
        icon:'',
        name:'product-list',
        component:ProductList,
        children:[]
      },
    ]
  }
]

export default routes;