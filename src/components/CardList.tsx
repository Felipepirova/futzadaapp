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
     {avatar:"images/piro.png",name:"Pirova",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"images/amaral.png",name:"Amaral",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"images/furto.png",name:"Furtado",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"images/du.png",name:"Dudu",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"images/lucas.png",name:"Felix",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"images/tavo.png",name:"tavinho",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"images/mat.png",name:"Mateus",data:{media:7,goal:7,pen:7,assist:7,}},
     {avatar:"images/joao.png",name:"Joa",data:{media:7,goal:7,pen:7,assist:7,}},
  ]
  
  useEffect(()=>{
    setCardList(arrayStatic)
  },[])

  return(
    <section>
      <ul>
        {cardList.map(card =><Card key={card.name} card={card}/>)}
      </ul>
    </section>
  )
}
