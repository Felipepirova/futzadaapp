import { api } from '../../services/api'
import { Container } from './style'

export function Home() {
  api.get('leagues').then(response => console.log(response.data))
  //retorno do back-end para ligas

  return (
    <Container>
      <h1 className="title">
        Fut<span>zada</span>
      </h1>
    </Container>
  )
}
