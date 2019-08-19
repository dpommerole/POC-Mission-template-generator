import { shallowMount } from '@vue/test-utils'
import sinonModule from 'sinon'
import * as homeFilterService from '@/services/homeFilter.service'
import * as backendService from '@/services/backend.service'
import Home from '@/pages/home.vue'

describe('Home', () => {
  let sinon
  let wrapper
  let getFilterHomeStub
  let params
  let $auth
  let $imageFallback
  let resultFilterHome
  let axiosGetStub

  beforeEach(() => {
    sinon = sinonModule.createSandbox()
    getFilterHomeStub = sinon.stub(homeFilterService, 'getFilterHome')
    axiosGetStub = sinon.stub(backendService, 'axiosGet')
    getFilterHomeStub.resolves('')
    params = {
      userId: 1,
      role: '',
      token: ''
    }
    $auth = {
      user: {
        id: -1,
        roleName: ''
      },
      getToken: (strat) => {
      }
    }
    $imageFallback = 'https://upload.wikimedia.org/wikipedia/commons/2/20/Point_d_interrogation.jpg'
    resultFilterHome = {
      optionsNameGroup: '',
      optionsNameClient: '',
      optionsName: ''
    }

    wrapper = shallowMount(Home, {
      mocks: {
        $auth,
        $imageFallback,
        resultFilterHome
      },
      stubs: {
        'b-card': true,
        'b-card-text': true,
        'b-container': true,
        'b-row': true,
        'b-col': true,
        'b-select': true,
        'b-button': true,
        'nuxt-link': true
      }
    })

    wrapper.vm.missions = [ { id: 3, image: '', name: '' }, { id: 4, image: '', name: '' } ]
  })
  afterEach(() => {
    sinon.restore()
  })

  it('Should return a success after get gallery', async () => {
    const isResetGallery = false
    console.log(wrapper.vm.missions.length)
    let resol = {
      data: {
        mission: [[{ id: 1, image: '', name: '' }, { id: 2, image: '', name: '' }]]
      }
    }
    axiosGetStub.resolves(resol)
    await wrapper.vm.getGallery(params, isResetGallery)

    expect(wrapper.vm.missions.length).toBe(4)
  })
  it('Should reset and show the results of returned gallery', async () => {
    const isResetGallery = true
    console.log(wrapper.vm.missions.length)
    let resol = {
      data: {
        mission: [[{ id: 1, image: '', name: '' }, { id: 2, image: '', name: '' }]]
      }
    }
    axiosGetStub.resolves(resol)
    await wrapper.vm.getGallery(params, isResetGallery)

    expect(wrapper.vm.missions.length).toBe(2)
  })
})
