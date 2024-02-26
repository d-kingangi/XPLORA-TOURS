/// <reference types="Cypress"/>

describe('Core features cypress', ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:4200")
    })

    it('uses contains keyword', ()=>{
        cy.find('navbar').find('div')
        cy.get('.logo').contains("Qiux Travels")
    })
})