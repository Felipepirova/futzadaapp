import "../styles/card.scss"
import {ReactComponent as Avatar} from '../images/amaral.svg';

interface CardProps  {
  card:{
    avatar:string,
    name:string,
    data:{
      media:number,
      goal:number,
      pen:number,
      assist:number,
    }
  }
}

//Fazer validação sem avatar

export function Card (props: CardProps){
  return(
    <div className="card">
      <Avatar className="avatar"/>
      <div className="left">
        <h1>{props.card.name}</h1>
        <p>Media:{props.card.data.media}</p>
      </div>
      <div className="right">
        <p>{props.card.data.goal}</p>
        <p>{props.card.data.pen}</p>
        <p>{props.card.data.assist}</p>       
      </div>       
    </div>
  )
}
