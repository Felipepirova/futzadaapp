// Nota - média de {gols, canetas, assistencia}
import {Card} from "../components/Card" 
import { useState, useEffect } from "react";
import "../styles/card.scss"

interface CardItem  {
  avatar:string,
  name:string,
  data:{
    media:number,
    goal:number,
    pen:number,
    assist:number,
  }
}

export function CardList (){

  const [cardList, setCardList] = useState<CardItem[]>([])

   var arrayStatic = [
     {avatar:"",name:"Pirova",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"",name:"Amaral",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"",name:"Furtado",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"",name:"Dudu",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"",name:"Felix",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"",name:"tavinho",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"",name:"Mateus",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"",name:"Joa",data:{media:7,goal:7,pen:7,assist:7,}},
  ]
  
  useEffect(()=>{
    setCardList(arrayStatic)
  },[])

  return(
    <section>
      <h1 className="title">Fut<span>zeiros</span></h1>
      <ul>
        {cardList.map(card =><Card key={card.name} card={card}/>)}
      </ul>
    </section>
  )
}
