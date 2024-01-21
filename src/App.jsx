import { useState } from 'react'
import './App.css'
import Konto from './assets/components/konto/Konto'

function App() {

  const [obj, setObj] = useState({
    entry: "",
  })

  const [konto, setKonto] = useState(0)

  return (
    <>
      <div>
        <h1>Digital ATM</h1>
        <h3>of Panama Bank</h3>
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
