import { useEffect } from 'react'
import './App.scss'
import Header from './components/header/header'
import { fetDataFromAPI } from './utils/api'

function App() {
  useEffect(()=>
  {
    apiTesting()
  })
  const apiTesting = async ()=>
  {
    await fetDataFromAPI("/movie/popular")
  }
  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
