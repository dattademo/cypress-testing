import homePage from '../../pageObjects/pages/homePage'
import listPage from '../../pageObjects/pages/listPage'
import eventPage from '../../pageObjects/pages/eventPage'

// Local variable to store data from fixtures
var data

describe('Ticket Purchase Tests', () => {
    before(() => {
        cy.fixture('ticketPurchaseData').then((testData) => {
            // get data from ticketPurchaseData.json and store it locally
            data = testData
        })
    })

    it('Should display the Events Search Box', () => {
        // go to homepage and make sure that search input field is visible
        cy.visit('')
        cy.get(homePage.eventsearch.inputGroup).should('be.visible')
    })

    it('Should allow the user to search for an Event', () => {
        // perform a regular search and go to event list page and verify the cluster's title
        homePage.eventsearch.performSearch(data.textToSearch)
        cy.get(listPage.resultClursterTitle).should('contain', data.eventTitle)
    })

    it('Event Result cluster should be clickable', () => {
        // click on event cluster and go to event detail page
        listPage.clickEventByHref(data.eventURL)
        cy.url().should('include', data.eventURL)
    })

    it('The user can select ticket Day, Type, and Quantity and Proceed', () => {
        // select dropdown elements in order to enable the buy button and click on it
        eventPage.openDropdown(eventPage.showButton)
        eventPage.selectOption(eventPage.showList, data.eventDay)

        eventPage.openDropdown(eventPage.sectorButton)
        eventPage.selectOption(eventPage.sectorList, data.ticketType)

        eventPage.openDropdown(eventPage.quantityButton)
        eventPage.selectOption(eventPage.quantList, data.ticketQuantity)

        eventPage.clickOn(eventPage.buyButton)
    })

    it('Should display the correct order details and go to checkout', () => {
        // verify the prices on the detail page and proceed
        cy.get(eventPage.ticketPrice).should('contain', data.ticketPrice)
        cy.get(eventPage.serviceCharge).should('contain', data.serviceCharge)
        cy.get(eventPage.totalPrice).should('contain', data.totalPrice)
        eventPage.clickOnContinueButton()
    })

    it('The user should see the Ticket Delivery Cluster and proceed', () => {
        // skip the delivery component and go to checkout
        cy.contains(eventPage.deliverySelectButton).should('be.visible')
        eventPage.clickOn(eventPage.deliverySelectButton)
    })

    it('The user should get the final order detail and click on Confirm button', () => {
        // verify that final prices are the expected ones and proceed
        cy.get(eventPage.purchaseDetail)
            .should('contain', data.ticketPrice)
            .and('contain', data.serviceCharge)
            .and('contain', data.totalPrice)
        eventPage.clickOn(eventPage.confirm)
    })

    it('Login module should be displayed', () => {
        // verify that the login popup is displaying the correct buttons
        cy.get(eventPage.login.loginContainer).should('be.visible')
        cy.get(eventPage.login.facebookButton).should('be.visible')
        cy.get(eventPage.login.userButton).should('be.visible')
        cy.get(eventPage.login.registerButton).should('be.visible')
    })
})
