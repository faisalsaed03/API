import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

export default function App() {



  // const [catFact,setCatFact] = useState("")

  // const fetchCatFact = ()=>{
  //   axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   })


  




  // useEffect(()=> {
  //   fetchCatFact();
  

  // },[])

  const [name,setName] = useState("")
  const [predictedAge,setpredictedAge] = useState(0)

  const fetchDate = ()=>{
    axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setpredictedAge(res.data.age);
    })

  }



  return (
    <div className='btn'>
      <input type="text" placeholder='write your name' onChange={(event) => {setName(event.target.value)}}/>
      <button onClick={fetchDate}>Predict Age</button>
      <h1>predicted age: {predictedAge} </h1>
    </div>
    
  )
}


