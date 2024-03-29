describe('My First Test', () => {
    it('Check that tests are running', () => {
        expect(true).to.equal(true)
    })
})

describe('Running frontend', () => {
    it('Check that frontend page is running', () => {
        cy.visit(Cypress.config().baseUrl)
    })
})

describe('Click Submit', () => {
    it('Check that Submit button is clickable', () => {
        cy.contains('Submit').click()
    })
})

describe('Add task', () => {
    it('Check that user can add the task', () => {
        cy.get('#inputTitle').type('Fake task').should('have.value', 'Fake task')
        cy.contains('Submit').click()
    })
})

describe('Change status of the task', () => {
    it('Check that user can change the task status', () => {
        cy.get('#flexCheckChecked').click()
    })
})
