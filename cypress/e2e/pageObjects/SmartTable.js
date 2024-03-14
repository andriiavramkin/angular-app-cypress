/// <reference types="cypress" />


export default class SmartTable {
    _url = "/pages/tables/smart-table"
    _containerSelector = "table thead.ng-star-inserted"
    _newItem = 'tbody .selected'

    navigate(){
        cy.visit(this._url)
      }

    fill({id, firstName, lastName, username, email, age}){
        this.idInput.type(id),
        this.firstNameInput.type(firstName),
        this.lastNameInput.type(lastName),
        this.usernameInput.type(username),
        this.emailInput.type(email),
        this.ageInput.type(age)
    }

    get addButton(){
        return cy.get(this._containerSelector).find('th:first-of-type a[href="#"]')
    }
    
    get idInput(){
        return cy.get(this._containerSelector).find('input-editor input[placeholder="ID"]')
    }

    get firstNameInput(){
        return cy.get(this._containerSelector).find('input-editor input[placeholder="First Name"]')
    }
    
    get lastNameInput(){
        return cy.get(this._containerSelector).find('input-editor input[placeholder="Last Name"]')
    }

    get usernameInput(){
        return cy.get(this._containerSelector).find('input-editor input[placeholder="Username"]')
    }

    get emailInput(){
        return cy.get(this._containerSelector).find('input-editor input[placeholder="E-mail"]')
    }

    get ageInput(){
        return cy.get(this._containerSelector).find('input-editor input[placeholder="Age"]')
    }

    get confirmButton(){
        return cy.get(this._containerSelector).find('.nb-checkmark')
    }

    get newItemCreated(){
        return cy.get(this._newItem)
    }

// edit test related 
    get buttonEdit(){
        return cy.get(this._newItem).find('a[class*="edit"]')
    }
    
    get idVerification(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(0)
    }

    get firstNameVerification(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(1)
    }

    get lastNameVerification(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(2)
    }

    get usernameVerification(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(3)
    }

    get emailVerification(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(4)
    }

    get ageVerification(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(5)
    }

}