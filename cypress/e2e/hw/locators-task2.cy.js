/// <reference types="cypress" />


describe("EnterNameSuite", {scrollBehavior: 'center'}, ()=>{
  before (()=>{
    cy.visit("/pages/modal-overlays/dialog")
  })

  it("EnterNameDialogValidation", ()=>{
    const contatinerSelector = '.cdk-overlay-pane'

    cy.get(`.result-from-dialog button`).click()
    cy.get(`${contatinerSelector} ngx-dialog-name-prompt`).should('be.visible')

    cy.get(`${contatinerSelector} nb-card-header`).should('have.text', 'Enter your name')

    cy.get(`${contatinerSelector} input`).should('have.attr', 'placeholder', 'Name')
    cy.get(`${contatinerSelector} input`).type(`Andrew`)
    // cy.get(`${contatinerSelector} input`).should('have.text', `Andrew`)  //this one doesn't work somewhy. maybe because App ;limited to FE and entered inputs are not recognisable.

    cy.get(`${contatinerSelector} button[status="danger"]`).should('have.text', 'Cancel').and('be.visible')
    cy.get(`${contatinerSelector} button[status="success"]`).should('have.text', 'Submit').and('be.visible')

  })
})