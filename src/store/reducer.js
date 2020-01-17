// 合并所有reducer
import { combineReducers } from 'redux';
import member from '../pages/member/memberList/state';
import product from '../pages/product/state';

export default combineReducers({
  member,
  product
})