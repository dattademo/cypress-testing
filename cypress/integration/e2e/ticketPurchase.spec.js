import homePage from '../../pageObjects/pages/homePage'
import listPage from '../../pageObjects/pages/listPage'
import eventPage from '../../pageObjects/pages/eventPage'

describe('Ticket Purchase Tests', () => {
    it('Home Page should match the requirements', () => {
        cy.visit('')

        cy.fixture('ticketPurchaseData').then((testData) => {
            homePage.eventsearch.performSearch(testData.textToSearch)
            listPage.clickEventByHref(testData.eventURL)

            eventPage.openDropdown(eventPage.showButton)
            eventPage.selectOption(eventPage.showList, testData.eventDay)

            eventPage.openDropdown(eventPage.sectorButton)
            eventPage.selectOption(eventPage.sectorList, testData.ticketType)

            eventPage.openDropdown(eventPage.quantityButton)
            eventPage.selectOption(eventPage.quantList, testData.ticketQuantity)
            
            //eventPage.clickOnBuyButton()  
            eventPage.clickOn(eventPage.buyButton)          
            eventPage.clickOnContinueButton()

            eventPage.clickOn(eventPage.deliverySelectButton)
            eventPage.clickOn(eventPage.confirm)
            
        })
    })
})
