/// <reference types="cypress" />


describe("StepperTestSuite", ()=>{
    it("StepperTextValidation", {scrollBehavior: "center"},  ()=>{
      const containerSelector = 'nb-stepper[orientation="horizontal"]'
      cy.visit("/pages/layout/stepper")

       cy.get(`${containerSelector} h3`).should("have.text", "Step content #1")
       cy.get(`${containerSelector} div:first-of-type > div:first-of-type > div:first-of-type > span`).should("have.text", "1").and("have.class", "ng-star-inserted")
       
       cy.get(`${containerSelector} button`).contains("prev").should("be.disabled")
       cy.get(`${containerSelector} button`).contains("next").click()
       cy.get(`${containerSelector} h3`).should("have.text", "Step content #2")
       cy.get(`${containerSelector} div:first-of-type > div:nth-of-type(3) > div:first-of-type > span`).should("have.text", "2").and("have.class", "ng-star-inserted")
       cy.get(`${containerSelector} div:first-of-type > div:first-of-type > div:first-of-type > nb-icon`).should("have.attr", "icon").and('equal', 'checkmark-outline')

      cy.get(`${containerSelector} button`).contains("prev").should("be.enabled")
      cy.get(`${containerSelector} button`).contains("next").click()
      cy.get(`${containerSelector} h3`).should("have.text", "Step content #3")
      cy.get(`${containerSelector} div:first-of-type > div:nth-of-type(5) > div:first-of-type > span`).should("have.text", "3").and("have.class", "ng-star-inserted")
      cy.get(`${containerSelector} div:first-of-type > div:nth-of-type(3) > div:first-of-type > nb-icon`).should("have.attr", "icon").and('equal', 'checkmark-outline')

      cy.get(`${containerSelector} button`).contains("prev").should("be.enabled")
      cy.get(`${containerSelector} button`).contains("next").click()
      cy.get(`${containerSelector} h3`).should("have.text", "Step content #4")
      cy.get(`${containerSelector} div:first-of-type > div:nth-of-type(7) > div:first-of-type > span`).should("have.text", "4").and("have.class", "ng-star-inserted")
      cy.get(`${containerSelector} div:first-of-type > div:nth-of-type(5) > div:first-of-type > nb-icon`).should("have.attr", "icon").and('equal', 'checkmark-outline')

      cy.get(`${containerSelector} button`).contains("prev").should("be.enabled")
      cy.get(`${containerSelector} button`).contains("next").should("be.disabled")
    })
})