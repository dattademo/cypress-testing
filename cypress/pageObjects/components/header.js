export default class Header {
    static logo = '.navbar-brand.logo-large.logo_dark'

    static clickOnLogo() {
        cy.get(this.logo).click()
    }
}
