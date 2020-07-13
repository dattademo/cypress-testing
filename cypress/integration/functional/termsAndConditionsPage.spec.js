import Footer from '../../pageObjects/components/footer'
import termsPage from '../../pageObjects/pages/termsPage'

var htmlTitle
var pageURL
var headerTitle
var titleP1
var titleP2

describe('Terms and Conditions Tests', () => {
    before(() => {
        cy.fixture('termsAndConditionsData').then((testData) => {
            htmlTitle = testData.htmlTitle
            pageURL = testData.pageURL
            headerTitle = testData.headerTitle
            titleP1 = testData.titleP1
            titleP2 = testData.titleP2
        })
    })

    it('The footer should display the Terms and Conditions Button', () => {
        cy.visit('')
        cy.contains(Footer.termsButton).should('be.visible')
    })

    it('Should allow the user browse to T&C Page', () => {
        cy.contains(Footer.termsButton).click()
        cy.url().should('contain', pageURL)
    })

    it('Should display the expected title on Browser and Header', () => {
        cy.title().should('contain', htmlTitle)
        cy.get(termsPage.title).should('contain', headerTitle)
    })

    it('Should display the expected title on Paragraph 1 and 2', () => {
        cy.get(termsPage.titleP1).should('contain', titleP1)
        cy.get(termsPage.titleP2).should('contain', titleP2)
    })
})
