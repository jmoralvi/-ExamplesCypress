
  it("validar pagina de inicio", () => {
    cy.visit("http://zero.webappsecurity.com");
    cy.get(".active > img").should("be.visible")
    cy.get(".active > .custom > h4").contains("Online Banking")

  })
  
  it('Transferencia de fondos', () => {
   
    cy.visit("http://zero.webappsecurity.com");
    cy.get("#signin_button").click()
    cy.get("#user_login").type("username")
    cy.get("#user_password").type("password")
    cy.get(".btn").click()
    cy.get("#transfer_funds_tab > a").click()
    cy.get("#tf_fromAccountId").select("1")
    cy.get("#tf_toAccountId").select("5")
    cy.get("#tf_amount").type("300")
    cy.get("#tf_description").type("Transferencia de prueba 300")
    cy.get("#btn_submit").click()
    cy.get("#btn_submit").click()
    cy.get(".alert").contains("You successfully submitted your transaction.")
  })


