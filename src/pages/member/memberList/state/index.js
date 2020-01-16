import {CHANEG_MEMBER_INFO} from '../../../../store/key';
const defaultState = {
  userInfo:{
    id:'215537936',
    level:'Admin',
    username:'FHK',
    gender:'1',
    phone:'13226627208',
    countryCode:'CN',
    note:'Hi! My name is Joker',
    sellerType:'online',
    sellerSince:'2020-1-16',
    address:'广州码农炒饭有限公司',
    shopSite:'100',
    trafficOrFollower:'255'
  }
}
export default (state=defaultState,action)=>{
  switch(action.type){
    case CHANEG_MEMBER_INFO:
      return {...state,userInfo:action.value}
    default :
      return {...state}
  }
}