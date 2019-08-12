// imports

import Vue from 'vue'
import sinonModule from 'sinon'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Context of the test', () => {
  // Mocks and variables
  let component
  let sinon
  let store
  let $router, $route
  let ExampleComponent, exampleStub, secondStub, ExampleStore, something


  // allow to mount Component in every test
  let mountComponent = () => {
    component = mount(ExampleComponent, {
      store,
      localVue,
      mocks: {
        $router,
        $route
      }
    })
  }

  // allow to dynamically set stub in every test
  let setStub = (stubs) => {
    exampleStub.returns('')
    secondStub.resolves('')
  }

  beforeEach(async () => {
    sinon = sinonModule.sandbox.create()

    // instanciate stubs
    $router = { push: sinon.stub() }

    // create the store needed for the test
    ExampleStore = {
      namespaced: true,
      getters: {
        // someGetters
      },
      actions: {
        // someActions
      }
    }

    // instanciation of the store
    store = new Vuex.Store({
      modules: {
        ExampleStore
      },
      namespaced: true
    })

    $route = {
      name: 'my-wonderful-route'
    }
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Should test something', async () => {
    // given
    setStub({})

    // when
    mountComponent()

    // Vue.nextTick() if needed

    // then
    expect(something).toBe(true)
  })
})
