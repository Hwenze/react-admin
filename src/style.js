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
  }
  .menu-container{
    line-height: 36px;
    font-size: 16px;
    user-select: none;
    cursor:pointer;
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
  // #root .ant-menu-dark.ant-menu-inline .ant-menu-item{
  //   background:${CONFIG.mainColor};
  // }
  #root .ant-menu-inline .ant-menu-submenu{
    background:${CONFIG.mainColor};
  }
  #root .ant-menu-dark{
    background: #2a313c;
  }
`