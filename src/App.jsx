import { useState } from 'react'
import './App.css'
import Konto from './assets/components/konto/Konto'

function App() {

  const [obj, setObj] = useState({
    entry: ""
  })

  return (
    <>
      <div>
        <h1>Digital ATM</h1>
        <h3>of Bananan Bank</h3>
        <Konto
          obj = {obj}
          setObj = {setObj}
          konto = {konto}
          setKonto = {setKonto}
        />
      </div>

    </>
  )
}

export default App
