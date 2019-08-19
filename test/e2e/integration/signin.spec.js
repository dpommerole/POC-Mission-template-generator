import { REGISTER_API, LOGIN_API, ME_API } from '../apiRoutes'
describe('SignIn test page', () => {
  beforeEach(() => {
    cy.visit('/signin')

    cy.server()
  })

  it('Should register and redirect to home', () => {
    cy.get('#signInFirstName').type('John')
    cy.get('#signInLastName').type('Doe')
    cy.get('#signInEmail').type('john@doe.com')
    cy.get('#signInPassword').type('jDoe')
    cy.get('#signInPasswordConfirm').type('jDoe')

    cy.fixture('account.json').then((data) => {
      cy.route('POST', REGISTER_API, data.register.success, { status: 200 }).as('registerSuccess')
    })
    cy.fixture('account.json').then((data) => {
      cy.route('POST', LOGIN_API, data.login.success, { status: 200 }).as('loginSuccess')
    })
    cy.fixture('account.json').then((data) => {
      cy.route('GET', ME_API, data.me.success, { status: 200 }).as('meSuccess')
    })

    cy.get('#signInButton').click()
    cy.wait('@registerSuccess')
    cy.wait('@loginSuccess')
    cy.wait('@meSuccess')

    cy.url().should('include', 'home')
  })

  it('Should show error if the FirstName field is empty', () => {
    cy.get('#signInFirstName').type('John')
    cy.get('#signInFirstName').clear()
    cy.get('#signInFirstName-live-feedback').should('be.visible')
  })

  it('Should show error if the LastName field is empty', () => {
    cy.get('#signInLastName').type('Doe')
    cy.get('#signInLastName').clear()

    cy.get('#signInLastName-live-feedback').should('be.visible')
  })

  it('Should show error if the mail field isn\'t correctly filled', () => {
    cy.get('#signInEmail').type('thisEmailIs@nError')

    cy.get('#signInEmail-live-feedback').should('be.visible')
  })

  it('Should show error if the Password field is empty', () => {
    cy.get('#signInPassword').type('jDoe')
    cy.get('#signInPassword').clear()

    cy.get('#signInPassword-live-feedback').should('be.visible')
  })

  it('Should show error if the Confirm Password field is not the same as Password field', () => {
    cy.get('#signInPassword').type('jDoe')
    cy.get('#signInPasswordConfirm').type('notTheSamePassword')

    cy.get('#signInPasswordConfirm-live-feedback').should('be.visible')
  })

  it('Should show error if the response from backend is: register has failed', () => {
    cy.get('#signInFirstName').type('John')
    cy.get('#signInLastName').type('Doe')
    cy.get('#signInEmail').type('john@doe.com')
    cy.get('#signInPassword').type('jDoe')
    cy.get('#signInPasswordConfirm').type('jDoe')

    cy.fixture('account.json').then((data) => {
      cy.route('POST', REGISTER_API, data.register.failure, { status: 400 }).as('registerFailure')
    })

    cy.get('#signInButton').click()
    cy.wait('@registerFailure')

    cy.get('body').find('.toasted').should('be.visible')
  })

  it('Should show error if the response from backend is: login has failed', () => {
    cy.get('#signInFirstName').type('John')
    cy.get('#signInLastName').type('Doe')
    cy.get('#signInEmail').type('john@doe.com')
    cy.get('#signInPassword').type('jDoe')
    cy.get('#signInPasswordConfirm').type('jDoe')

    cy.fixture('account.json').then((data) => {
      cy.route('POST', REGISTER_API, data.register.success, { status: 200 }).as('registerSuccess')
    })
    cy.fixture('account.json').then((data) => {
      cy.route('POST', LOGIN_API, data.login.failure, { status: 401 }).as('loginFailure')
    })

    cy.get('#signInButton').click()

    cy.wait('@registerSuccess')
    cy.wait('@loginFailure')

    cy.get('body').find('.toasted').should('be.visible')
  })
})
