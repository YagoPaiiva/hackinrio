import styled from 'styled-components'

export const Sbutton = styled.button `
background-color:#ffc000;
color:#000;

border-style:none;
width: 350px;
height: 250px;
margin: 10px;
border-radius: 15px;

font-size:40px;

display:flex;
justify-content: center;
align-items: center;

    &:active{
        background-color: #863652;
    }
`

export const Container = styled.div`
display:flex;
flex-wrap:wrap;

padding: 30px;

background-color:#243c97;
width:1200px;
min-height: 750px;
height:auto;
`