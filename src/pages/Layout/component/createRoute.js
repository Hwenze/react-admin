import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// 判断是否登录或者是否有权限
// import { isAuthenticated } from '../../utils/Session'

const JRouter = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    <Component {...props}/>
    // !!isAuthenticated()
    //   ? <Component {...props} />
    //   : <Redirect to={{
    //     pathname: '/login',
    //     state: {from: props.location}
    //   }}/>
  )}/>
)

export default JRouter