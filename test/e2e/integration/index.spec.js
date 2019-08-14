const loginApiRoute = '/api/account/login'
const meApiRoute = '/api/account/me'
describe('Index test page', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.server()
    cy.fixture('index.json').then((data) => {
      cy.route('GET', meApiRoute, data.me.success).as('meSuccess')
    })
  })

  it('Should login and redirect', () => {
    cy.get('#loginEmail').type('john@doe.com')
    cy.get('#loginPassword').type('foobar')

    cy.fixture('index.json').then((data) => {
      cy.route('POST', loginApiRoute, data.login.success).as('loginSuccess')
    })

    cy.get('#loginButton').click()

    cy.wait('@loginSuccess')
    cy.wait('@meSuccess')

    cy.url().should('include', 'home')
  })

  it('Should show an error if a field isn‘t correctly filled', () => {
    // type a wrongs infos in the fields and check the visibility of the error message
  })

  it('Should show an error if there is something wrong with the backend request', () => {
    // here, we will need a fixture to mock the backend request , with an error this time
  })
})
