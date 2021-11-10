
// Nota - média de {gols, canetas, assistencia}

import {ReactComponent as Avatar} from "../images/amaral.svg"
import "../styles/card.scss"

export function Card (){
  return(
    <div className="card">
      <Avatar className="avatar"/>
      <div>
        <h1>Nome</h1>
        <p>10.00</p>
      </div>
    </div>
  )
}
