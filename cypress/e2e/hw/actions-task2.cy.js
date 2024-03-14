

describe("LoginSuite", ()=>{
    before({scrollBehavior: "center"}, ()=>{
      cy.visit("/auth/login")
    })
  
    it("LoginAction)", ()=>{
      const loginData = {
        email: "harry@mail.com",
        password: "Welcome123!",
        rememberMe: true
      }
  
      cy.fillLoginForm(loginData)
      cy.get("nb-login form").find('button').as("LoginButton")
  
      cy.get("@LoginButton").click()
    //   cy.wait(500)
      cy.url().should('match', /dashboard/)

    })
  })