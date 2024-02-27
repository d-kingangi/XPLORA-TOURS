/// <reference types="Cypress"/>

describe('It navigates the user', ()=>{
    it('should navigate back and forth ', ()=>{
        cy.visit('http://localhost:4200')
        cy.get('.register').click() // find the class
        cy.location('pathname').should('equal',  '/register')
        cy.go('back')  // .go takes only two parameters
        cy.location('pathname').should('equal',  '/')

        cy.get('.login').click()
        cy.location('pathname').should('equal',  '/login')
        cy.go('back')
        cy.location('pathname').should('equal',  '/')
        
    })
})

describe('Method chaining in admin', ()=>{
    it('should navigate back and forth', ()=>{
        cy.visit('http://localhost:4200/admin')
        cy.get('.add-tour').click()
        cy.location('pathname').should('equal', '/add-tour')
        cy.go('back')  
        cy.location('pathname').should('equal',  '/admin')

        cy.visit('http://localhost:4200/admin')
        cy.get('.view-adventures').click()
        cy.location('pathname').should('equal', '/view-adventures')
        cy.go('back')
        cy.location('pathname').should('equal',  '/admin')
    })
})
