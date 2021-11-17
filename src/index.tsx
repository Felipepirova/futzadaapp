import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    leagues: Model
  },

  seeds(server) {
    server.db.loadData({
      leagues: [
        {
          id: 0,
          name: 'Futeba',
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
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/leagues', () => {
      return this.schema.all('leagues')
    })
    this.post('leagues', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('leagues', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
