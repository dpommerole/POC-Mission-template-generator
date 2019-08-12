import '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import sinonModule from 'sinon'
import Index from '@/pages/index.vue'
import * as loginService from '@/services/login.service'
import Vue from 'vue'

describe('Index', () => {

    let sinon
    let $router
    let wrapper

    beforeEach(() => {
        sinon = sinonModule.createSandbox()

        sinon.stub(loginService, 'login').resolves('/home')
        $router = {push: sinon.stub()}

        wrapper = shallowMount(Index, {
            mocks: {
                $router,
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
                    password: 'test',
                },
            },
        })
    })

    afterEach(() => {
        sinon.restore()
    })


    it('Should return login success', async () => {
        wrapper.vm.form.email = 'toto@toto.fr'
        wrapper.vm.form.password = 'test'

        wrapper.find('#loginButton').vm.$emit('click')

        await Vue.nextTick()

        expect($router.push.withArgs('/home').called).toBe(true)
    }),

    it.skip('Generate Toast notification in case of bad login', () => {

    })
})
