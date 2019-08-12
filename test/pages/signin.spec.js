import { shallowMount } from '@vue/test-utils'

import sinonModule from 'sinon'
import SignIn from '@/pages/signin.vue'
import * as loginService from '@/services/login.service'
import Vue from'vue'

describe('SignIn', () => {
    let sinon
    let $router
    let $toasted
    let wrapper
    let loginStub




    beforeEach(() => {
        sinon = sinonModule.createSandbox()
        loginStub = sinon.stub(loginService, 'login')
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

    it('should return login success', async () => {
        loginStub.resolves('/home')
        wrapper.vm.doLogin()
        await Vue.nextTick()
        expect($router.push.withArgs('/home').called).toBe(true)
    })

    it.skip('Generate Toast notification in case of bad register', async () => {
    })

    it('Generate Toast notification in case of bad redirection after register', async () => {
        loginStub.throws()
        wrapper.vm.doLogin()
        await Vue.nextTick()
        expect($toasted.show.called).toBe(true)
    })
})
