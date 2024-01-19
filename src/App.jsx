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
        <h1>Banana Bank</h1>

        <Form
          setObj={setObj}
          obj={obj}
        />
        <Kontostand
          KontoObj={KontoObj}
          setKontoObj={setKontoObj}
        />
        </div>

    </>
  )
}

export default App
