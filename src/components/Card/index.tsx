import { Container } from './style'

interface CardProps {
  card: {
    name: string
    data: {
      media: number
      goal: number
      pen: number
      assist: number
    }
  }
}

export function Card(props: CardProps) {
  return (
    <Container>
      <div>
        <h1>{props.card.name}</h1>
        <p>Media:{props.card.data.media}</p>
      </div>
      <div>
        <p>{props.card.data.goal}</p>
        <p>{props.card.data.pen}</p>
        <p>{props.card.data.assist}</p>
      </div>
    </Container>
  )
}
