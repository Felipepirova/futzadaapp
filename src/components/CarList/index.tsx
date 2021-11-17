import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { CardType } from '../../types/Card'
import { Card } from '../Card'
import { Container } from './style'

export function CardList() {
  const [cardList, setCardList] = useState<CardType[]>([])

  useEffect(() => {
    // api.get('players').then(response => console.log(response))

    api.get('players').then(response => setCardList(response.data.players))
  }, [])

  return (
    <Container>
      {cardList.map(card => (
        <Card key={card.name} card={card} />
      ))}
    </Container>
  )
}
