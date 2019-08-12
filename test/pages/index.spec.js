import { shallowMount } from '@vue/test-utils'

import sinonModule from 'sinon'
import Index from '@/pages/index.vue'
import * as loginService from '@/services/login.service'
import Vue from 'vue'

describe('Index', () => {
  let sinon
  let $router
  let $toasted
  let wrapper
  let loginStub

  const mockClickEvent = async () => {
    wrapper.vm.form.email = 'toto@toto.fr'
    wrapper.vm.form.password = 'test'

    wrapper.find('#loginButton').vm.$emit('click')

    await Vue.nextTick()
  }

  beforeEach(() => {
    sinon = sinonModule.createSandbox()

    loginStub = sinon.stub(loginService, 'login')
    $router = { push: sinon.stub() }
    $toasted = { show: sinon.stub() }

    wrapper = shallowMount(Index, {
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
      },
      propsData: {
        user: {},
        form: {
          email: 'toto@toto.fr',
          password: 'test'
        }
      }
    })
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Should return login success', async () => {
    loginStub.resolves('/home')
    await mockClickEvent()

    expect($router.push.withArgs('/home').called).toBe(true)
  })

  it('Generate Toast notification in case of bad login', async () => {
    loginStub.throws('eror')

    await mockClickEvent()

    expect($toasted.show.called).toBe(true)
  })
})
