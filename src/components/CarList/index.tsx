import { useState, useEffect } from 'react'
import { Card } from '../Card'
import { Container } from './style'

interface CardItem {
  name: string
  data: {
    media: number
    goal: number
    pen: number
    assist: number
  }
}

export function CardList() {
  const [cardList, setCardList] = useState<CardItem[]>([])

  var arrayStatic = [
    {
      name: 'Pirova',
      data: { media: 7, goal: 7, pen: 7, assist: 7 }
    }
  ]

  useEffect(() => {
    setCardList(arrayStatic)
  }, [])

  return (
    <Container>
      {cardList.map(card => (
        <Card key={card.name} card={card} />
      ))}
    </Container>
  )
}
