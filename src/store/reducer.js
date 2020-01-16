// 合并所有reducer
import { combineReducers } from 'redux';
import member from '../pages/member/memberList/state';

export default combineReducers({
  member,
})