export default class eventSearch {
    static searchInputField = '#inputSearch'
    static searchInputButton = '#searchEvent'
    static inputGroup = '.input-group'

    static performSearch(textToSearch) {
        cy.get(this.searchInputField).type(textToSearch)
        cy.get(this.searchInputButton).click()
    }
}
