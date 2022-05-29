// Using `reference` we are just get an auto-complete features as types are defined  
/// <reference types="cypress" /> 

// https://jsonplaceholder.typicode.com/users

// Assert the call responds with a successful 200 status code for a GET API
describe('Validate 200 Success code for Get API', ()=>{

    it('Get users', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/users',
        }).then((res)=>{  //res is just a response variable to store the reponse
            expect(res.status).to.eq(200)

        })
    })
})    

// Validate you can retrieve data for a single user
describe('Get a Specfic singer User details using ID and validate', ()=>{
  it('Get user By ID', ()=>{
    cy.request({
        method : 'GET',
        url : 'https://jsonplaceholder.typicode.com/users/3',
    }).then((res)=>{  //res is just a response variable to store the reponse
        expect(res.status).to.eq(200)
        expect(res.body.name).to.eq('Clementine Bauch')
        expect(res.body.username).to.eq('Samantha')
        expect(res.body.address.city).to.eq('McKenziehaven')
        
    })
})
})

// Validate 10 records are returned
describe('Validate 10 records were retured in Get API', ()=>{

    it('Get Number of Records returened', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/users',
        }).its('body').should('have.length',10)
    
        })
    })


// Assert that the user “Mrs. Dennis Schulist” is contained in the list using query String
describe('Validate particular data in the response', ()=>{

    it('Validate user Mrs. Dennis Schulist exist or not', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/users',
            qs : {
                name: 'Mrs. Dennis Schulist'
            }
        }).then((res)=>{  //res is just a response variable to store the reponse
            expect(res.status).to.eq(200)

        })
    })
    })




