import BasePage from './basePage'
import EventSearch from '../components/eventSearch'

export default class listPage extends BasePage {
    static eventsearch = EventSearch

    static clickEventByHref(href) {
        let completeRef = 'a[href*="' + href + '"]'
        cy.get(completeRef).click()
    }
}
