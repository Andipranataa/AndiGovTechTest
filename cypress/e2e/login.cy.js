import elements from "../support/elements.js"
const data = require(`../fixtures/DataLogin.js`)

describe('Technical Test GovTech QA Engineer Andi', function () {
    //Positive Case
    it('Login use Valid Data', function () { 
      cy.LoginValidData(data.logindemo) // Data login dapat dicostumize pada commands.js
        //Validate ketika sudah berhasil login -> muncul Products setelah login page
        cy.contains('Products').should('be.visible')
    })
    
    //Negative Case
    it('Login use Invalid Data', function () {
      cy.visit('https://www.saucedemo.com/')
      cy.get(elements.Login_Username).should('be.visible').type('invaliDdata')  // data type bebas sesuai dengan pengujian(Sama halnyadengan case Uppercase dan lowercase)
      cy.get(elements.Login_Password).should('be.visible').type('invalidpasswrd') // data type bebas sesuai dengan pengujian(Sama halnyadengan case Uppercase dan lowercase)
      cy.get(elements.Button_login).should('be.visible').click()
      //Validate ketika data usename dan password salah
      cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
  })
})