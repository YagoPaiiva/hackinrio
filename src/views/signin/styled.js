import styled from 'styled-components';
import { Container } from '../../components/buttons/styled';


export const SContainer = styled(Container)`
  align-items: center;
  justify-content: center;

  .contrasteArea{
    width:auto;
    height:50px;
    background-color:#FF0000;
  }
  .waiting{
    font-size:40px;
    color:#ffc000;
  }
`
export const FormArea = styled.div`
width:100%;
height:100%;
flex-wrap: wrap;
display: flex;
justify-content: center;
align-items: center;
`

export const Sbox = styled.div `
  width: 100%; 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffc000;
  align-items: center;
`
export const SboxYesOrNo = styled(Sbox)`
h1{
  font-size:50px;
  color:#ff0f64;
  margin-top: 1%;
  text-align: center;
}
h2{
  font-size:55px;
}
.contentButton{
    width: 100%;
    margin-top:3%;
    height:auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}
`

export const SboxReconection = styled(Sbox)`
h1{
  font-size:55px;
  color:#ff0f64;
  margin-top: 5%;
}
h2{
  font-size:55px;
}
.contentButton{
    width: 100%;
    margin-top:3%;
    height:auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}
`

export const SboxSignin = styled(Sbox)`

img{
    width:200px;
    -webkit-filter: drop-shadow(5px 5px 5px #222222);
    filter: drop-shadow(5px 5px 5px #222222);
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
    height: 70px;
    width: 50vw;
    border-radius:6px;
  }
  label{
    font-size: 25px;
    margin-top:20px;
  }
  .ajustInput{
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
`

export const SboxPayment = styled(Sbox)`
h1{
  margin-top: 5%;
  font-size:40px;
  text-align: center;
  color: #ff0f64;
}
h2{
  font-size: 35px;
  margin-bottom:5%;
}
.FontAwesome{
  color: #FFF;
}
`
export const SboxTutorial = styled(Sbox)`


h1{
  color:#ff0f64;
  margin-top:60px;
}
h2{
  font-size: 30px;
  margin:40px;
}
.FontAwesome{
  color: #FFF;
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

export const Sclickme = styled.button`
  border: 2px black solid;
  border-radius: 6px;
  width: 400px;
  height: 80px;
  margin-top:20px;
  font-size: 30px;
  background: #000;
  color: #fff;
`