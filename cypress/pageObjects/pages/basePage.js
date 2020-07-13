import Login from '../components/login'
import Footer from '../components/footer'


export default class BasePage {
    static login = Login
    static footer = Footer

    static clickOn(text) {
        cy.contains(text).click()
    }
}
