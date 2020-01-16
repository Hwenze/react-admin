import React from 'react';
import {ResultWrapper,Message,ResultDiv} from './style';
import sucImg from './image/success.jpg';
import errImg from './image/error.jpg';
import noImg from './image/404.png';
import serImg from './image/502.jpg';
import { Button } from 'antd';
const Result=(props)=>{
  const CODE = {
    '200':sucImg,
    '500':errImg,
    '404':noImg,
    '502':serImg
  }
  const MESSAGE = {
    '200':'Success',
    '500':'Fails',
    '404':'No Found',
    '502':'Server Error'
  }
  const $code = props.code?props.code:'200';
  return(
    <ResultWrapper>
      <ResultDiv>
        <img style={{width:'400px',height:'auto'}} src={props.code?CODE[props.code]:CODE[$code]}></img>
        <Message>{props.message?props.message:MESSAGE[$code]}</Message>
        <Button onClick={props.closeResult}>Close</Button>
      </ResultDiv>
    </ResultWrapper>
  )
}
export default Result;