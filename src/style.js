import { createGlobalStyle } from 'styled-components';
const CONFIG = {
  mainColor:'#2a313c;',
}
export const GlobalStyle = createGlobalStyle`
  /*全局样式*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  .app{
    width: 100%;
    height: 100%;
  }
  /* 主体样式 */
  .j-layout{
    overflow:hidden;
    min-height:100%;
    display:flex;
    width: 100%;
    position: fixed;
  }
  .j-layout-sidebar{
    min-height:100%;
    max-width: 220px;
    width: 220px;
    color:#fff;
    background:${CONFIG.mainColor};
  }
  .j-layout-main{
    flex:1;
    background:#f7f8fa;
    // background:#000000;
  }
  .main-wrapper{
    background:#Fff;
  }
  .ant-breadcrumb-link .bread-item{
    color:#fff;
  }
  #root .ant-breadcrumb a:hover {
    color: #2a313c;
  }
  .ant-breadcrumb-link .ant-breadcrumb > span:last-child a{
    color:#2a313c;
  }
  #root .ant-table-thead > tr > th{
    background:#e4e4e4;
  }
  .menu-container{
    line-height: 36px;
    font-size: 16px;
    user-select: none;
    cursor:pointer;
  }
  // 表单
  .j-header{
    background:#fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 7, 17, 0.1);
    margin-bottom:10px;
  }
  .j-from{
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    padding: 8px 16px;
  }
  .w100{
    width:100%;
  }
  .j-btn{
    min-width:80px; 
  }
  .flex-column .j-from-item{
    flex-direction: column;
  }
  .j-from-item{
    display:flex;
    flex-direction: row;
    line-height:40px;
    padding-top:10px;
    padding-right:12px;
    padding-bottom:6px;
  }
  .j-from-item-label{
    margin-right:12px;
  }
  .ant-menu-item{
    user-select: none;
  }
  .ant-menu-item-active{
    background: cadetblue;
  }
  // 菜单被激活
  .ant-menu-submenu-open{
    background:#37404f;
  }
  #root .j-layout .ant-menu.ant-menu-dark .ant-menu-item-selected,#root .j-layout .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
    background: cadetblue;
  }
  #root .ant-menu-inline .ant-menu-submenu{
    background:${CONFIG.mainColor};
  }
  #root .ant-menu-dark{
    background: #2a313c;
  }
  #root .anticon{
    cursor:pointer;
  }
  .p-15{
    padding:15px; 
  }
  .m-15{
    margin:15px; 
  }
`