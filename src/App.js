import React , {useState , useEffect} from 'react'
import './App.css'
import AlanBtn from '@alan-ai/alan-sdk-web'
const alankey = 'e780f75dca382ea715024d1932783e5e2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
  useEffect(()=>{
    AlanBtn({
      key: alankey,
      onCommand:(command)=>{
         if(command === 'testcommand')
         {
           window.alert('this is test command')
         }
      }
    })
  })
  return (
    <div>
      <h1 style = {{textAlign:'center'}}>Voice assistance news app</h1>
      <h2 style = {{textAlign:'center'}}>say 'what is your name or what can i do here '</h2>
    </div>
  )
}

export default App
