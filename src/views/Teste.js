import { LoginMP3, Desc1MP3, Desc2MP3 } from '../audio/handler'

import styled from 'styled-components'


const Sh1 = styled.h1`
  color:white;

`
var isPlaying = false;

let counter = 0
let playback = new Audio(LoginMP3);



const PlayAudio = () =>{
  console.log(playback.duration)
  if(counter === 0){
    counter ++
    playback.play();
  }
  setTimeout(() => {
    counter = 0
  }, playback.duration*1000 );
}

const Page = () => {

  document.addEventListener('click', (event)=>{
    PlayAudio()
  })

  return <>
    <Sh1>teste</Sh1>
  </>
}
export default Page