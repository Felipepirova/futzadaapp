export interface CardType {
  name: string
  data: {
    average: number
    goal: number
    pen: number
    assist: number
  }
}

export interface CardsType {
  card: {
    name: string
    data: {
      average: number
      goal: number
      pen: number
      assist: number
    }
  }
}
