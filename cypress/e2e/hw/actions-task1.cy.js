/// <reference types="cypress" />


import SmartTable from "../pageObjects/SmartTable.js"

describe("SmartTableSuite", ()=>{
    const smartTable = new SmartTable()

    before({scrollBehavior: "center"}, ()=>{
        smartTable.navigate()
    })


    it('Create new user', ()=>{
        const userData = {
            id: '001',
            firstName: 'John',
            lastName: 'Snow',
            username: 'john008',
            email: 'johnsnow@mail.com',
            age: '23'
        }

    smartTable.addButton.click()

    smartTable.idInput.type(userData.id)
    smartTable.idInput.invoke('val').should('eq', userData.id)

    smartTable.firstNameInput.type(userData.firstName)
    smartTable.firstNameInput.invoke('val').should('eq', userData.firstName)

    smartTable.lastNameInput.type(userData.lastName)
    smartTable.lastNameInput.invoke('val').should('eq', userData.lastName)

    smartTable.usernameInput.type(userData.username)
    smartTable.usernameInput.invoke('val').should('eq', userData.username)

    smartTable.emailInput.type(userData.email)
    smartTable.emailInput.invoke('val').should('eq', userData.email)

    smartTable.ageInput.type(userData.age)
    smartTable.ageInput.invoke('val').should('eq', userData.age)

    smartTable.confirmButton.click()

    smartTable.newItemCreated.should('exist').and('be.visible')

    cy.wait(500)
    })

    it('Edit existing user', ()=>{
        const userData = {
            id: '01',
            firstName: 'Peter',
            lastName: 'Snowy',
            username: 'peter008',
            email: 'peter@mail.com',
            age: '27'
        }

        smartTable.editButton.click()
        smartTable.fill(userData)
        smartTable.confirmButton.click()

        smartTable.verifyId.should('be.visible').and('include.text', `${userData.id}`)
        smartTable.verifyFirstName.should('be.visible').and('include.text', `${userData.firstName}`)
        smartTable.verifyLastName.should('be.visible').and('include.text', `${userData.lastName}`)
        smartTable.verifyUsername.should('be.visible').and('include.text', `${userData.username}`)
        smartTable.verifyEmail.should('be.visible').and('include.text', `${userData.email}`)
        smartTable.verifyAge.should('be.visible').and('include.text', `${userData.age}`)

    })
})