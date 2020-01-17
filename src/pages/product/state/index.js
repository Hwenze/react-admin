import {CHANEG_PRODUCT_INFO} from '../../../store/key';
const defaultState = {
  productInfo:{
    "price_range_cn": "",
    "baseCategoryId": '',
    "title": "English Title",
    "price_range_th": "",
    "from_url": "",
    "update_time": "",
    "price_range_pk": "",
    "property_list_src": "",
    "from": "taobao",
    "id": '',
    "ali_spu_id": "",
    "create_time": "",
    "purchaseRange": '',
    "baseCategoryName": "",
    "title_id": "",
    "warehouse": '',
    "title_ur": "",
    "from_shop_id": '',
    "title_th": "Thai Title",
    "mainImage": "http://iph.href.lu/300x300",
    "price_range_id": "",
    "sell_area": '',
    "batch_step": '',
    "admin_id": '',
    "priceRange": '',
    "title_zh": "Chiese Title",
    "status": ''
  }
}
export default (state=defaultState,action)=>{
  switch(action.type){
    case CHANEG_PRODUCT_INFO:
      return {...state,productInfo:action.value}
    default :
      return {...state}
  }
}