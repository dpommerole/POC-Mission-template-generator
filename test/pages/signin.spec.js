import { shallowMount } from '@vue/test-utils'

import sinonModule from 'sinon'
import SignIn from '@/pages/signin.vue'
import * as loginService from '@/services/login.service'
import * as backendService from '@/services/backend.service'

describe('SignIn', () => {
  let sinon
  let $router
  let $toasted
  let wrapper
  let loginStub
  let axiosPostStub

  beforeEach(() => {
    sinon = sinonModule.createSandbox()
    loginStub = sinon.stub(loginService, 'login')
    axiosPostStub = sinon.stub(backendService, 'axiosPost')
    $router = { push: sinon.stub() }
    $toasted = { show: sinon.stub() }

    wrapper = shallowMount(SignIn, {
      mocks: {
        $router,
        $toasted
      },
      stubs: {
        'b-button': true,
        'b-form': true,
        'b-form-input': true,
        'b-form-invalid-feedback': true,
        'b-form-group': true,
        'nuxt-link': true
      }
    })
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Should return login success', async () => {
    loginStub.resolves('/home')
    await wrapper.vm.doLogin()
    expect($router.push.withArgs('/home').called).toBe(true)
  })

  it('Should return register success', async () => {
    axiosPostStub.resolves({
      data: {
        user: {}
      }
    })
    wrapper.find('#signInButton').vm.$emit('click')
    loginStub.resolves('/home')
    await wrapper.vm.doLogin()
    expect($router.push.withArgs('/home').called).toBe(true)
  })

  it('Should generate Toast notification in case of bad register', async () => {
    axiosPostStub.throws()
    wrapper.find('#signInButton').vm.$emit('click')
    expect($toasted.show.called).toBe(true)
  })

  it('Should generate Toast notification in case of bad redirection after register', async () => {
    loginStub.throws()
    wrapper.vm.doLogin()
    expect($toasted.show.called).toBe(true)
  })
})
