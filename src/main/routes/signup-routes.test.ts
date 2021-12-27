import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helper/mongo-helper'
import app from '../config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const acccountCollection = await MongoHelper.getCollection('accounts')
    await acccountCollection.deleteMany({})
  })

  test('Should return account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'test',
        email: 'test@main.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
