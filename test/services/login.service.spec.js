import sinonModule from 'sinon'
import { login } from '@/services/login.service'
import '@vue/test-utils'

describe('Login Service', () => {
  let sinon
  let auth = {
    loginWith: () => {},
    loggedIn: false
  }
  const email = 'toto'
  const password = 'calogero'

  beforeEach(() => {
    sinon = sinonModule.createSandbox()
  })

  afterEach(() => {
    sinon.restore()
  })
  it('Should return the correct route if login has succeeded', async () => {
    auth.loggedIn = true
    const result = await login({ auth, email, password })
    expect(result).toBe('/home')
  })
  it('Should throw an error if login has failed', async () => {
    let result
    auth.loggedIn = false
    try {
      await login({ auth, email, password })
    } catch (e) {
      result = e
    }
    expect(result).toBe('Veuillez retenter')
  })
})
