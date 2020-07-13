import homePage from '../../pageObjects/pages/homePage'
import listPage from '../../pageObjects/pages/listPage'
import eventPage from '../../pageObjects/pages/eventPage'

var textToSearch
var eventTitle
var eventURL
var eventDay
var ticketType
var ticketQuantity
var ticketPrice
var serviceCharge
var totalPrice

describe('Ticket Purchase Tests', () => {
    before(() => {
        cy.fixture('ticketPurchaseData').then((testData) => {
            textToSearch = testData.textToSearch
            eventTitle = testData.eventTitle
            eventURL = testData.eventURL
            eventDay = testData.eventDay
            ticketType = testData.ticketType
            ticketPrice = testData.ticketPrice
            serviceCharge = testData.serviceCharge
            ticketQuantity = testData.ticketQuantity
            totalPrice = testData.totalPrice
        })
    })

    it('Should display the Events Search Box', () => {
        cy.visit('')
        cy.get(homePage.eventsearch.inputGroup).should('be.visible')
    })

    it('Should allow the user to search for an Event', () => {
        homePage.eventsearch.performSearch(textToSearch)
        cy.get(listPage.resultClursterTitle).should('contain', eventTitle)
    })

    it('Event Result cluster should be clickable', () => {
        listPage.clickEventByHref(eventURL)
        cy.url().should('include', eventURL)
    })

    it('The user can select ticket Day, Type, and Quantity and Proceed', () => {
        eventPage.openDropdown(eventPage.showButton)
        eventPage.selectOption(eventPage.showList, eventDay)

        eventPage.openDropdown(eventPage.sectorButton)
        eventPage.selectOption(eventPage.sectorList, ticketType)

        eventPage.openDropdown(eventPage.quantityButton)
        eventPage.selectOption(eventPage.quantList, ticketQuantity)

        eventPage.clickOn(eventPage.buyButton)
    })

    it('Should display the correct order details and go to checkout', () => {
        cy.get(eventPage.ticketPrice).should('contain', ticketPrice)
        cy.get(eventPage.serviceCharge).should('contain', serviceCharge)
        cy.get(eventPage.totalPrice).should('contain', totalPrice)
        eventPage.clickOnContinueButton()
    })

    it('The user should see the Ticket Delivery Cluster and proceed', () => {
        cy.contains(eventPage.deliverySelectButton).should('be.visible')
        eventPage.clickOn(eventPage.deliverySelectButton)
    })

    it('The user should get the final order detail and click on Confirm button', () => {
        cy.get(eventPage.purchaseDetail).should('contain', ticketPrice)
        cy.get(eventPage.purchaseDetail).should('contain', serviceCharge)
        cy.get(eventPage.purchaseDetail).should('contain', totalPrice)
        eventPage.clickOn(eventPage.confirm)
    })

    it('Login module should be displayed', () => {
        cy.get(eventPage.login.loginContainer).should('be.visible')
        cy.get(eventPage.login.facebookButton).should('be.visible')
        cy.get(eventPage.login.userButton).should('be.visible')
        cy.get(eventPage.login.registerButton).should('be.visible')
        
    })
})
