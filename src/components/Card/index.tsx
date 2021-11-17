import { CardsType } from '../../types/Card'
import { Container } from './style'

export function Card(props: CardsType) {
  return (
    <Container>
      <h1>Name:{props.card.name}</h1>
      <p>average:{props.card.data.average}</p>
      <p>goal:{props.card.data.goal}</p>
      <p>pen:{props.card.data.pen}</p>
      <p>assist:{props.card.data.assist}</p>
    </Container>
  )
}
