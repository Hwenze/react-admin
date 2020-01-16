import styled from 'styled-components';
export const ResultWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background: #2727276b;
  background: #fff;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  z-index:999;
`
export const Message = styled.p`
  background: #fff;
  padding: 2px 20px;
  width: 400px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
`
export const ResultDiv = styled.div`
  font-weight: 600;
  font-size: 24px;
  background:#fff;
  padding: 10px;
  box-sizing: border-box;
`