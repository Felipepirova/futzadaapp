import { CardList } from '../../components/CarList'
import { Container } from './style'

export function Home() {
  return (
    <Container>
      <h1 className="title">
        Fut<span>zeiros</span>
      </h1>
      <CardList />
    </Container>
  )
}
