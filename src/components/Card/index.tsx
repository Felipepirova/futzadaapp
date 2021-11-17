import { CardsType } from '../../types/Card'
import { Container } from './style'

export function Card(props: CardsType) {
  return (
    <Container>
      <h1>{props.card.name}</h1>
      <p>Media:{props.card.data.media}</p>
      <p>{props.card.data.goal}</p>
      <p>{props.card.data.pen}</p>
      <p>{props.card.data.assist}</p>
    </Container>
  )
}
