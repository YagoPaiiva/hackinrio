import Styled from 'styled-components'

export const SHeader = Styled.div`
  display:flex;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:80px;
  position:fixed;

  
  img{
    width:10%;
  }
`
export const NavBar = Styled.nav `
width:100%;
height:80px;
background-color: #243c97;
font-size:20px;
font-weight:700;
color:#FFFFFF;
padding-left: 55px;
padding-right: 55px;
display: flex;
justify-content: space-between;
align-items: center;
    img{
        width:200px;
        filter: drop-shadow(5px 5px 5px #222);
    }

`