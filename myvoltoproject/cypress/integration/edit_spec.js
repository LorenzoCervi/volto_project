describe('create a content',()=>{
    beforeEach(() => {
      cy.autologin();
    });

 /*it('Create document',()=>{
 cy.createContent({
        contentType: 'Document',
        contentId: 'my-page-edit',
        contentTitle: 'My Page for Edit',
      });
      cy.visit('/my-page-edit');
      cy.get('.documentFirstHeading').should('have.text', 'My Page for Edit');
      cy.url().should('eq', Cypress.config().baseUrl + '/my-page-edit');
    });*/
    
    
 //CREARE UN MIO COMPONENTE
 it('add a block',()=>{
 cy.visit('/my-page-edit/edit')
 cy.get('.block.text [contenteditable]').click();
 cy.get('button.block-add-button').click();
 cy.get('.blocks-chooser').contains('MyComp').click();
 cy.get('.form').contains('Nome')
 cy.get('#toolbar-save').click();
 cy.get(".submit-block-button ").should('have.text','INVIA')
 });
 
 //PROVARE I PLACEHOLDER
 it("type in sidebar in placeholder and see effecyts on block",()=>{
 cy.visit('/my-page-edit/edit')
 cy.get('.myComp').eq(0).click()
 cy.get('#field-placeholder-name').type('Prova plh Nome')
 cy.get('#field-name input').should('have.attr','placeholder','Prova plh Nome')
 cy.get('#field-placeholder-city').type('Prova plh Città')
 cy.get('#field-city input').should('have.attr','placeholder','Prova plh Città')
 cy.get('#field-placeholder-notes').type('Prova plh Note')
 cy.get('#field-notes textarea').should('have.attr','placeholder','Prova plh Note')
 });
 
 //PROVARE I REQUIRED
 it("select the required field from sidebar and see effect on form",()=>{
 cy.visit('/my-page-edit/edit')
 cy.get('.myComp').eq(0).click()
 //name
 cy.get('#field-required-name input').check({force:true})
 cy.get('#field-name ').should('have.attr','class','inline required field text')
 cy.get('#field-required-name input').uncheck({force:true})
 cy.get('#field-name ').should('have.attr','class','inline field text')
 //age
 cy.get('#field-required-age input').check({force:true})
 cy.get('#field-age ').should('have.attr','class','inline required field number')
 cy.get('#field-required-age input').uncheck({force:true})
 cy.get('#field-age ').should('have.attr','class','inline field number')
 //sex
 cy.get('#field-required-sex input').check({force:true})
 cy.get('#field-sex ').should('have.attr','class','inline required field myselect')
 cy.get('#field-required-sex input').uncheck({force:true})
 cy.get('#field-sex ').should('have.attr','class','inline field myselect')
 //city
 cy.get('#field-required-city input').check({force:true})
 cy.get('#field-city ').should('have.attr','class','inline required field text')
 cy.get('#field-required-city input').uncheck({force:true})
 cy.get('#field-city').should('have.attr','class','inline field text')
 //notes
 cy.get('#field-required-notes input').check({force:true})
 cy.get('#field-notes ').should('have.attr','class','inline required field textarea')
 cy.get('#field-required-notes input').uncheck({force:true})
 cy.get('#field-notes ').should('have.attr','class','inline field textarea')
 });
 
 
 //PROVA A INSERIRE QUALCOSA IN QUALSIASI CAMPO E VEDI CHE NON FA NULLA
 it('type name field of form with an wrong input',()=>{
  cy.visit('/my-page-edit/edit')
  //nome
  cy.get('#field-name').type('l')
  cy.get('#field-name input').should('have.value','')
  //email
  cy.get('#field-email').type('l')
  cy.get('#field-email input').should('have.value','')
  //age
  cy.get('#field-name').type('19')
  cy.get('#field-name input').should('have.value','')
  //sex
  cy.get('#field-sex').type('Maschio')
  cy.get('#field-sex input').eq(1).should('have.value','')
  cy.get('.react-select__indicators').eq(0).click()
  //city
  cy.get('#field-city').type('l')
  cy.get('#field-city input').should('have.value','')
  //reason
  cy.get('#field-reason').type('Aiuto')
  cy.get('#field-reason input').eq(1).should('have.value','')
  cy.get('.react-select__indicators').eq(0).click()
  //notes
  cy.get('#field-notes').type('l')
  cy.get('#field-notes textarea').should('have.value','')
  });
  
  
  //VEDERE SE FUNZIONA IL REQUIRED CON LA PRESENZA DEL TOAST DI ERRORE NEL CASO IN CUI IL CAMPO REALTIVO NON VENGTA RIEMPITO, DA RIPETERE IN TEORIA PER TUTTI I CAMPI IN CUI È POSSIBLIE METTERE A REQUIRED
  it("try to requireda field,save try to sne dwithout fill that field and see error toast",()=>{
  cy.visit('/my-page-edit/edit')
  cy.get('.myComp').eq(0).click()
  cy.get('#field-required-name input').check({force:true})
  cy.get('#field-name ').should('have.attr','class','inline required field text')
  cy.get('#toolbar-save').click();
  cy.get(".submit-block-button ").should('have.text','INVIA')
  cy.get('#field-email input').type('try@after.edit')
  cy.get('.submit-block-button ').click()
  cy.get('.Toastify__toast--error div h4').eq(0).should('have.text','Errore contenuto Nome')
  cy.get('.Toastify__toast--error div p').eq(0).should('have.text','Questo campo è obbligatorio')
    cy.get('.Toastify__toast--error div h4').should('have.length',1)
  });
  
 
 //ELIMINARE IL MIO COMPOINENTE
 it("delete my block",()=>{
 cy.visit('/my-page-edit/edit')
 cy.get('.block.myComp').eq(0).click();
 cy.get('.delete-button').click();
 
 });
});
