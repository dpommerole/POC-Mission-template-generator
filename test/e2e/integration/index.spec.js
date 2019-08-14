import { LOGIN_API, ME_API } from '../apiRoutes'
describe('Index test page', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.server()
    cy.fixture('account.json').then((data) => {
      cy.route('GET', ME_API, data.me.success).as('meSuccess')
    })
  })

  it('Should login and redirect', () => {
    cy.get('#loginEmail').type('john@doe.com')
    cy.get('#loginPassword').type('foobar')

    cy.fixture('account.json').then((data) => {
      cy.route('POST', LOGIN_API, data.login.success).as('loginSuccess')
    })

    cy.get('#loginButton').click()

    cy.wait('@loginSuccess')
    cy.wait('@meSuccess')

    cy.url().should('include', 'home')
  })

  it('Should show an error if a field isn‘t correctly filled', () => {
    cy.get('#loginEmail').type('john@do')

    cy.get('#loginEmail-live-feedback').should('be.visible')
  })

  it('Should show an error if there is something wrong with the backend request', () => {
    // here, we will need a fixture to mock the backend request , with an error this time
  })
})
