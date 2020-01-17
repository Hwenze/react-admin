import React from 'react';
import {
  CardWrapper,
  Title,
  Body
} from './style';
const Card =({width:width,style:style,title:title,component:component,...props})=>{
  return(
    <CardWrapper style={width?{...style,width:width}:{...style}}>
      {title?<Title>{title}</Title>:''}
      <Body {...props}>
        {component}
      </Body>
    </CardWrapper>
  )
}
export default Card;