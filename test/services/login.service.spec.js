import sinonModule from 'sinon'
import { login } from '@/services/login.service'
import '@vue/test-utils'

describe('Login Service', () => {
  let sinon

  beforeEach(() => {
    sinon = sinonModule.createSandbox()
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Should return the correct route if login has succeeded', () => {

  })

  it('Should throw an error if login has failed', () => {

  })
})
