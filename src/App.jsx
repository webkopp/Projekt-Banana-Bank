import { useState } from 'react'
import './App.css'
import Kontostand from './assets/components/kontostand/Kontostand'
import Form from './assets/components/form/Form'

function App() {

  const [obj, setObj] = useState({
    saldo: ""
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
