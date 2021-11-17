import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    players: Model
  },

  seeds(server) {
    server.db.loadData({
      players: [
        {
          id: 0,
          name: 'pirova',
          data: {
            average: 7,
            goal: 3,
            pen: 1,
            assist: 12
          }
        },
        {
          id: 1,
          name: 'amaral',
          data: {
            average: 7,
            goal: 3,
            pen: 1,
            assist: 12
          }
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/players', () => {
      return this.schema.all('players')
    })
    this.post('players', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('players', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
