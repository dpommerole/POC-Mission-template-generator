import { shallowMount, createLocalVue } from '@vue/test-utils'
import Signin from '@/pages/signin.vue'
import Vuelidate from 'vuelidate'

let wrapper = null

const localVue = createLocalVue()
localVue.use(Vuelidate)

beforeEach(() => {
  // Given
  wrapper = shallowMount(Signin, {
    localVue,
    stubs: {
      'b-form': true,
      'b-form-input': true,
      'b-form-group': true,
      'b-form-invalid-feedback': true,
      'nuxt-link': true,
      'b-button': true
    }
  })
})

describe('Signin page', () => {
  it('Should mount properly', () => {

    // Then
    expect(wrapper.exists()).toBe(true)
  })
})

