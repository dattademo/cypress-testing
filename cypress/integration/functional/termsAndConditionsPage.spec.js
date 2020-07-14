import Footer from '../../pageObjects/components/footer'
import termsPage from '../../pageObjects/pages/termsPage'

var data

describe('Terms and Conditions Tests', () => {
    before(() => {
        cy.fixture('termsAndConditionsData').then((testData) => {
            data = testData
        })
    })

    it('The footer should display the Terms and Conditions Button', () => {
        cy.visit('')
        cy.contains(Footer.termsButton).should('be.visible')
    })

    it('Should allow the user browse to T&C Page', () => {
        cy.contains(Footer.termsButton).click()
        cy.url().should('contain', data.pageURL)
    })

    it('Should display the expected title on Browser and Header', () => {
        cy.title().should('contain', data.htmlTitle)
        cy.get(termsPage.title).should('contain', data.headerTitle)
    })

    it('Should display the expected title on Paragraph 1 and 2', () => {
        cy.get(termsPage.titleP1).should('contain', data.titleP1)
        cy.get(termsPage.titleP2).should('contain', data.titleP2)
    })
})
