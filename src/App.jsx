import { useState } from "react"
import { CardInicial } from "./Components/CardInicial"
import { CardFinal } from "./Components/CardFinal"

export function App() {
  const [submited, setSubimited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  return(
    submited === false ? ( 
      <CardInicial setSubimited={setSubimited} setRateNote={setRateNote}/>
    ) : (
      <CardFinal rateNote={rateNote} />
    )

  )
}