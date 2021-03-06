import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should enable cors', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_body_parser')
      .expect('access-controll-allow-origin', '*')
  })
})
