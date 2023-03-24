import {request} from 'supertest'
import app from './index.js'


describe('Test of integration to HTTP server', ()=> {
  it('Should response with text "Hello World"', async () => {
    const response = await request(app).get('/')
    expect(response.text).toEqual('Hello World')
  })
})