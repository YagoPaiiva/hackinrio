import styled from 'styled-components';
import { Container } from '../../components/buttons/styled';


export const SContainer = styled(Container)
`
  align-items: center;
  justify-content: center;
`
export const FormArea = styled.div`
width:100%;
flex-wrap: wrap;
display: flex;
justify-content: center;
align-items: center;
`

export const Sbox = styled.div `
  width: 60vw; height: 40vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #ffc000;
  align-items: center;
  padding: 40px;
  img{
    width:200px;
  }
  h1{
    color:#ff0f64;
    font-size: 60px;
    text-align: center;
  }
  h2{
    font-size: 30px;
  }
  input{
    text-align: center;
    background-color: #eee;
    border: solid 3px #243c97;
    outline: 20px;
    height: 70px;
    width: 40vw;
    border-radius:6px;
    margin-bottom:20px;
  }
  label{
    font-size: 25px;
  }
`

export const Sbutton = styled.button `
  border: 2px black solid;
  border-radius: 6px;
  width: 400px;
  height: 80px;
  margin-top:20px;
  font-size: 30px;
  background: #ff0f64;
  color:#FFF;

    :active{
      background-color: #863652;
    }
`