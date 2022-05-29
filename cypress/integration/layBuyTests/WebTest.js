// Using `reference` we are just get an auto-complete features as types are defined  
/// <reference types="cypress" /> 


describe('Open laybuy site', () => { // this is just an function under which we have added the test cases/steps
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
      
      // Using `cy.visit()` command to visit our website and 
      // Using 'viewport' command to Control the size and orientation of the screen for your application
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.viewport(1280,720)
      cy.visit('https://www.laybuy.com/nz')
    })

    it('Test Scenario 1', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        // find the link with href attribute containing "/nz/shop-here"  and click
        cy.get('a[href="/nz/shop-here"]').contains('Shop').click()
        

        //verify that we have landed to correct Shop URL
        cy.url().should('include', '/shop-here')

        // enter the  “Heart of Oxford” text in the Search input field
        cy.get('input[type=search]').click({force: true}).wait(3000).type('Heart of Oxford')

        // To verify there are at least 2 shop directory tiles, using an assertion to check the  number of elements 
        cy.get('.tile-module--tile--1ZeJx').wait(1000).should('have.length.greaterThan', 2)

        //Since cypress doesn’t allow the opening of a new browser tab, the workaround in such cases is to 
        //remove the attribute – target=’_blank’. Now when we click the <a> link, instead of a new tab, 
        //the webpage is opened in the current tab. And then when the webpage is loaded, we are validating that the URL 
        //has the text ‘/https://littleheart.co.nz' 
        cy.wait(5000)
        //cy.get('a').should('have.attr', 'href', '/thelil').invoke('removeAttr', 'target').click()
        cy.get('a[href*="/thelil"]').invoke('removeAttr', 'target').click()
       
        //Switching to new opened browser
        cy.url().should('include','https://littleheart.co.nz')
      })
    })     
    