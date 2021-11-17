import { useState, useEffect } from 'react'
import { CardType } from '../../types/Card'
import { Card } from '../Card'
import { Container } from './style'

export function CardList() {
  const [cardList, setCardList] = useState<CardType[]>([])

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
