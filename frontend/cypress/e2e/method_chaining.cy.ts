/// <reference types="Cypress"/>

describe('Method chaining', ()=>{
    it('uses values and aliases', (()=>{
        cy.visit('https://localhost:4200')

        const loginLink = cy.get('[data-cy="login"]')
        loginLink.click()

        cy.get('.register').as('RegisterLink')
        cy.get('@RegisterLink').click()

        cy.get('[data-cy="create-acc-btn"]').as('CreateAccBtn')
        cy.get('@CreateAccBtn').then((el)=>{
            expect(el.val()).to.equal('Create Account')
            expect(el.val()).to.contain('Create')
        })

    }))
})


