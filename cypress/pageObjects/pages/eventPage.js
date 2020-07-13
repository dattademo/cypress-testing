import BasePage from './basePage'

export default class eventPage extends BasePage {
    // Show Dropdown elements
    static showButton = '#show-button'
    static showList = '#show-dropdown'

    // Sector Dropdown elements
    static sectorButton = '#sector-button'
    static sectorList = '#sector-dropdown'

    // Quantity Dropdown elements
    static quantityButton = '#quantity-button'
    static quantList = '#quantity-dropdown'

    static buyButton = 'Comprar'
    static eventContent = '#event_content'
    static continueButton = 'Continuar'
    static deliverySelectButton = 'Seleccionar'
    static confirm = 'Confirmar reserva'

    // Open Dropdown finding the button by id
    static openDropdown(button) {
        cy.get(button).click()
    }

    // Click on the option based on the visible text
    static selectOption(list, textToClick) {
        cy.get(list).contains(textToClick).click()
    }

    static clickOnContinueButton() {
        cy.get(this.eventContent).contains(this.continueButton).click()
    }
}
