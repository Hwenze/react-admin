export const router = [
  {
    title:'Member',
    path:'/member',
    icon:'',
    name:'member',
    children:[
      {
        title:'Member List',
        path:'/member/list',
        icon:'',
        name:'member-list',
        children:[]
      },
      {
        title:'My Member',
        path:'/member/myMember',
        icon:'',
        name:'member-myMember',
        children:[]
      },
      {
        title:'Member Review',
        path:'/member/review',
        icon:'',
        name:'member-review',
        children:[]
      },
    ],
  },
  {
    title:'Product',
    path:'/product',
    icon:'',
    name:'product',
    children:[
      {
        title:'Product List',
        path:'/product/list',
        icon:'',
        name:'product-list',
        children:[]
      },
      {
        title:'My product',
        path:'/product/Attr',
        icon:'',
        name:'product-attr',
        children:[]
      },
      {
        title:'Collection',
        path:'/product/collection',
        icon:'',
        name:'product-collection',
        children:[]
      },
      {
        title:'Suppiler',
        path:'/product/suppiler',
        icon:'',
        name:'product-suppiler',
        children:[]
      },
      {
        title:'Product Tag',
        path:'/product/tag',
        icon:'',
        name:'product-tag',
        children:[]
      },
      {
        title:'Product Brand',
        path:'/product/brand',
        icon:'',
        name:'product-brand',
        children:[]
      },
      {
        title:'Product External',
        path:'/product/external',
        icon:'',
        name:'product-external',
        children:[]
      },
    ],
  },
]
