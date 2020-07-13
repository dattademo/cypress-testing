import Header from '../components/header'

export default class BasePage {
    static header = Header

    static clickOn(text){
        cy.contains(text).click()
    }
}
