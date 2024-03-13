/// <reference types="cypress" />


export default class SmartTable {
    _url = "/pages/tables/smart-table"
    _containerSelector = "thead.ng-star-inserted"
    _newItem = 'tr[class~="selected"]'

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
        return cy.get(this._containerSelector).find('th:first-of-type > a')
    }
    
    get idInput(){
        return cy.get(this._containerSelector).find('input-editor > input[placeholder="ID"]')
    }

    get firstNameInput(){
        return cy.get(this._containerSelector).find('input-editor > input[placeholder="First Name")')
    }
    
    get lastNameInput(){
        return cy.get(this._containerSelector).find('input-editor > input[placeholder="Last Name")')
    }

    get usernameInput(){
        return cy.get(this._containerSelector).find('input-editor > input[placeholder="Username")')
    }

    get emailInput(){
        return cy.get(this._containerSelector).find('input-editor > input[placeholder="E-mail")')
    }

    get ageInput(){
        return cy.get(this._containerSelector).find('input-editor > input[placeholder="Age")')
    }

    get confirmButton(){
        return cy.get(this._containerSelector).find('.nb-checkmark')
    }

    get newItemCreated(){
        return cy.get(this._newItem)
    }


    get editButton(){
        return cy.get(this._newItem).find('[class~="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"]')
    }

    get verifyId(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(0)
    }

    get verifyFirstName(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(1)
    }

    get verifyLastName(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(2)
    }

    get verifyUsername(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(3)
    }

    get verifyEmail(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(4)
    }

    get verifyAge(){
        return cy.get(this._newItem).find('div[class="ng-star-inserted"]').eq(5)
    }

}