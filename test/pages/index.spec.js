import '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import sinonModule from 'sinon'
import Index from '@/pages/index.vue'
import { login } from '@/services/login.service'

describe('Index', () => {

    let sinon
    let $router
    let auth = {
        loginWith: () => {
            return '/home';
        },
        loggedIn: false,
    }

    const wrapper = shallowMount(Index, {
        mocks: {
            $router,
        },
        stubs: {
            'b-form' : true,
            'b-form-group': true,
            'b-form-input': true,
            'b-form-invalid-feedback': true,
            'b-button': true,
            'nuxt-link': true,
        },
        propsData: {
            user: {},
            form: {
                email: 'toto@toto.fr',
                password: 'test',
            },
        },
    })

    beforeEach(() => {
        sinon = sinonModule.createSandbox()
        $router = {push: sinon.stub()}
        console.log(sinon.stub());
        sinon.stub(login).resolves('/home')
    })

    it.skip('Should return login success', async () => {
        wrapper.vm.form.email = 'toto@toto.fr'
        wrapper.vm.form.password = 'test'
        wrapper.vm.form.auth = auth
        console.log('test= ', wrapper.vm.form);
        console.log('test= ', wrapper.vm.form.email);
        console.log('test= ', wrapper.vm.form.password);
        console.log('test= ', wrapper.vm.form.auth);
        
        wrapper.find("[type='submit']").trigger('click')

        console.log('router = ', $router);
        
    }),

    it.skip('Generate Toast notification in case of bad login', () => {

    })

    afterEach(() => {
        sinon.restore()
    })
    
})