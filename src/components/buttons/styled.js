import styled from 'styled-components'

export const Sbutton = styled.button `
    background-color:#ffc000;
    color:#000;
    border-style:none;
    width: 400px;
    height: 250px;
    margin: 5px;
    border-radius: 15px;
    padding: 15px;
    font-size:40px;
    display:flex;
    justify-content:space-evenly;
    align-items: center;

    &:active{
        background-color: #863652;
    }

    .FontAwesome{
        color:#ff0f64;
        font-size: 90px;
    }
`

export const Container = styled.div`
    display:flex;
    justify-content: center;
    margin-top:2%;
    align-content: flex-start;
    flex-wrap:wrap;
    background-color:#1f2744;
    width:100vw;
    height:100vh;

    .contentButton{
        width: 100%;
        height:300px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`


