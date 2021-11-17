export interface CardType {
  name: string
  data: {
    media: number
    goal: number
    pen: number
    assist: number
  }
}

export interface CardsType {
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
