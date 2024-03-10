describe('random_config_test_suite', () => {

    // before(() => {
    //     cy.visit('https://rozetka.com.ua/');
    // });

    // beforeEach(() => {
    //     cy.get('.container').click();
    // });

    // afterEach(() => {
    //     cy.get('.logout-button').click();
    //     cy.clearCookies();
    // });

    it('check the page opening', () => {
        cy.visit('https://rozetka.com.ua/');
    });

    it('Check dialog pop-up Status', () => {
        cy.get("(//button[@class='header__button ng-star-inserted'])[1]").click();
        cy.get('/html/body/app-root/rz-single-modal-window/div[3]/div[2]', { timeout: 10000 }).should('be.visible');
    });

    it('Input Validation', () => {
        cy.get("(//button[@class='header__button ng-star-inserted'])[1]").click();
        cy.get('#auth_email').type("peter@mail.com");
        cy.get('#auth_pass').type("Welcome123!");
    });

    it('Login Verification', () => {
        cy.get('.header__button.ng-star-inserted').first().click();
        cy.get('#auth_email').type("peter@mail.com");
        cy.get('#auth_pass').type("Welcome123!");
        cy.get('/html/body/app-root/rz-single-modal-window/div[3]/div[2]/rz-user-identification/rz-auth/div/form/fieldset/div[5]/button[1]').click();
    });
});
