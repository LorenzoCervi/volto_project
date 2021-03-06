

//VIEW CYPRESS TEST
describe('The Home Page', () => {
	beforeEach(()=>{
	cy.autologin()
	cy.visit('/prova-pagina')
	})


  /*it('successfully loads', () => {
    cy.visit('/')
    
    STRADA ALTERNATIVA PER ANDARE NELLA CARTELLA RELATIVA CON IL FORM DENTRO
    cy.get('.navigation').should('contain', 'PROVA')
    cy.get('[href="/prova-pagina"]').click()
    
  });*/
  
  //TEST PER VEDERE SE CI SONO I DUE TOAST DI ERRORE
  it('click on send button and see 2 toast error, if all fields are required', ()=>{
  
  cy.get('.submit-block-button ').click()
  cy.get('.Toastify__toast--error').should('have.length',2)
  cy.get('.Toastify__toast--error').eq(0).contains('Errore in tutti i campi')
  });
  
  
///////////////////////////////////////////////////////////////////////
//								       //
//								       //
//								       //
//				NOME	       		       //
//								       //
//								       //
//								       //
///////////////////////////////////////////////////////////////////////
  //PROVA A VEDERE SE TUTTI GLI INPUT SBAGLIATI SONO CONTROLLATI DAL CAMPO
  it('type name field of form with an wrong input',()=>{
  cy.get('#field-name').type('l')
  cy.get('#field-name input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Nome NON PUÒ contenere numeri o simboli e deve essere almeno lungo 2 lettere')
   cy.get('#field-name').type('{backspace}/')
  cy.get('#field-name input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Nome NON PUÒ contenere numeri o simboli e deve essere almeno lungo 2 lettere')
  cy.get('#field-name').type('{backspace}3')
  cy.get('#field-name input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Nome NON PUÒ contenere numeri o simboli e deve essere almeno lungo 2 lettere')});
  
  
  //PROVA A VEDERE SE COMPARE IL TOAST PER IL NOME RELATIVO AL FATTO CHE È RICHIESTO
   it('leave name field of form empty',()=>{
  cy.get('#field-name input').should('have.css','background-color','rgb(255, 255, 255)')
  cy.get('#field-notes').type('try')
  cy.get('.submit-block-button ').click()
  cy.wait(3000)
    cy.get('.Toastify__toast--error div h4').eq(0).should('have.text','Errore contenuto Nome')
  cy.get('.Toastify__toast--error div p').eq(0).should('have.text','Questo campo è obbligatorio')});
  
  
  //PROVA A VEDERE SE COMPARE IL TOAST DI ERRORE CONTENUTO
   it('type name field of form with an wrong input and send',()=>{
  cy.get('#field-name').type('l')
  cy.get('.submit-block-button ').click()
  cy.wait(3000)
  cy.get('.Toastify__toast--error div h4').eq(0).should('have.text','Errore contenuto Nome')
  cy.get('.Toastify__toast--error div p').eq(0).should('have.text',"Questo input è sbagliato, leggere l'errore nel campo")});   
  
///////////////////////////////////////////////////////////////////////
//								       //
//								       //
//								       //
//				EMAIL	       		       //
//								       //
//								       //
//								       //
///////////////////////////////////////////////////////////////////////
    //PROVA A VEDERE SE TUTTI GLI INPUT SBAGLIATI SONO CONTROLLATI DAL CAMPO
  it('type email field of form with an wrong input',()=>{
  cy.get('#field-email').type('l')
  cy.get('#field-email input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Email in input SBAGLIATA (miaemail@dominio.nat)')});

  //PROVA A VEDERE SE COMPARE IL TOAST PER L'EMAIL RELATIVO AL FATTO CHE È RICHIESTO
   it('leave email field of form empty',()=>{
 
  cy.get('#field-email input').should('have.css','background-color','rgb(255, 255, 255)')
  cy.get('#field-name').type('testing email')
  cy.get('.submit-block-button ').click()
  cy.wait(5000)
    cy.get('.Toastify__toast--error div h4').eq(0).should('have.text','Errore contenuto Email')
  cy.get('.Toastify__toast--error div p').eq(0).should('have.text','Questo campo è obbligatorio')});
  
  //PROVA A VEDERE SE COMPARE IL TOAST DI ERRORE CONTENUTO
     it('type email field of form with an wrong input and send',()=>{
  
  cy.get('#field-name').type('testing email')
  cy.get('#field-email').type('test@email')
  cy.get('.submit-block-button ').click()
  cy.wait(5000)
  cy.get('.Toastify__toast--error div h4').eq(0).should('have.text','Errore contenuto Email')
  cy.get('.Toastify__toast--error div p').eq(0).should('have.text',"Questo input è sbagliato, leggere l'errore nel campo")});  
///////////////////////////////////////////////////////////////////////
//								       //
//								       //
//								       //
//				AGE	       		       //
//								       //
//								       //
//								       //
/////////////////////////////////////////////////////////////////////// 
  
     //PROVA A VEDERE SE TUTTI GLI INPUT SBAGLIATI SONO CONTROLLATI DAL CAMPO
  it('type age field of form with an wrong input',()=>{
  cy.get('#field-age').type('{selectall}{backspace}1')
  cy.get('#field-age input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Età in input SBAGLIATA (range:18-100)')
  cy.get('#field-age').type('{backspace}101')
  cy.get('#field-age input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Età in input SBAGLIATA (range:18-100)')
  cy.get('#field-age input').type('{selectall}{backspace}A',{force:true})
  cy.get('#field-age input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Età in input SBAGLIATA (range:18-100)')
  }); 
  
  
    //PROVA A VEDERE SE COMPARE IL TOAST PER L'EMAIL RELATIVO AL FATTO CHE È RICHIESTO
   it('leave age field of form empty',()=>{
 
  cy.get('#field-age input').should('have.css','background-color','rgb(255, 255, 255)')
  cy.get('#field-name').type('testing age')
  cy.get('#field-email').type('testing@age.it')
  cy.get('#field-age').type('{backspace}{backspace}')
  cy.get('.submit-block-button ').click()
  cy.get('.Toastify__toast--error div h4').eq(0).should('have.text','Errore contenuto Età')
  cy.get('.Toastify__toast--error  div p').eq(0).should('have.text',"Questo input è sbagliato, leggere l'errore nel campo")
  });
  
  //PROVA A INCREMENTARE DI UNO E DECREMENTARE DI UNO
  it('try increase and decrease age',()=>{
 
  cy.get('#field-age input').should('have.css','background-color','rgb(255, 255, 255)')
  cy.get('#field-age').type('{uparrow}')
  cy.get('#field-age input').should('have.value',19)
  cy.get('#field-age').type('{downarrow}')
  cy.get('#field-age input').should('have.value',18)
  });
///////////////////////////////////////////////////////////////////////
//								       //
//								       //
//								       //
//				SEX	       		       //
//								       //
//								       //
//								       //
/////////////////////////////////////////////////////////////////////// 
   //PROVA A VEDERE SE COMPARE IL TOAST PER IL SESSO RELATIVO AL FATTO CHE È RICHIESTO
   it('leave sex field of form empty',()=>{
  cy.get('#field-name').type('testing age')
  cy.get('#field-email').type('testing@age.it')
  cy.get('.submit-block-button ').click()
  cy.get('.Toastify__toast--error div h4').eq(0).should('have.text','Errore contenuto Sesso')
  cy.get('.Toastify__toast--error  div p').eq(0).should('have.text',"Questo campo è obbligatorio")
  });
  
  //PROVA A VEDERE SE TUTTI GLI INPUT SI INSERISCONO, uguale per gli altri valori
  it('type age field of form with an wrong input',()=>{
  cy.get('#field-sex').type('Maschio')
  cy.get('#field-sex input').should('have.type','hidden').and('have.value','Maschio')
  cy.get('#field-sex').type('Femmina')
  cy.get('#field-sex input').should('have.value','Femmina')
  cy.get('#field-sex').type('Altro')
  cy.get('#field-sex input').should('have.value','Altro')
  cy.get('#field-sex').type('Prova')
  cy.get('#field-sex input').should('have.value','')
  }); 
    //PROVA A VEDERE SE TUTTI GLI INPUT, uguale per gli altri valori,INPUT HIDDEN
  it('select age field of form with an wrong input',()=>{
  cy.get('.react-select__indicators').eq(0).click()
  cy.get('#react-select-2-option-0').click()
  cy.get('#field-sex input').eq(1).should('have.value','Maschio')
  cy.get('.react-select__indicators').eq(0).click()
  cy.get('#react-select-2-option-1').click()
  cy.get('#field-sex input').eq(1).should('have.value','Femmina')
   cy.get('.react-select__indicators').eq(0).click()
  cy.get('#react-select-2-option-2').click()
  cy.get('#field-sex input').eq(1).should('have.value','Altro')
  }); 
  
///////////////////////////////////////////////////////////////////////
//								       //
//								       //
//								       //
//				CITY	       		       //
//								       //
//								       //
//								       //
///////////////////////////////////////////////////////////////////////
  //PROVA A VEDERE SE TUTTI GLI INPUT SBAGLIATI SONO CONTROLLATI DAL CAMPO
  it('type city field of form with an wrong input',()=>{
  cy.get('#field-city').type('l')
  cy.get('#field-city input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Città in input SBAGLIATA,(deve essere maiuscola) e deve essere almeno lungo 2 lettere')
  cy.get('#field-city').type('{backspace}L')
  cy.get('#field-city input').should('have.css','background-color','rgb(237, 195, 194)')
  cy.get('.red').should('have.text','Città in input SBAGLIATA,(deve essere maiuscola) e deve essere almeno lungo 2 lettere')});
  
    //PROVA A VEDERE SE COMPARE IL TOAST PER LA CITTÀ RELATIVO AL FATTO CHE È RICHIESTO
   it('leave city field of form empty',()=>{
  cy.get('#field-city input').should('have.css','background-color','rgb(255, 255, 255)')
  cy.get('#field-notes').type('try')
  cy.get('.submit-block-button ').click()
  cy.wait(5000)
  cy.get('.Toastify__toast--error div h4').eq(-1).should('have.text','Errore contenuto Città' )
  cy.get('.Toastify__toast--error div p').eq(-1).should('have.text','Questo campo è obbligatorio')
  });
    //PROVA A VEDERE SE COMPARE IL TOAST DI ERRORE CONTENUTO
   it('type city field of form with an wrong input and send',()=>{
  cy.get('#field-city').type('l')
  cy.get('.submit-block-button ').click()
  cy.wait(5000)
  cy.get('.Toastify__toast--error div h4').eq(-2).should('have.text','Errore contenuto Città')
  cy.get('.Toastify__toast--error div p').eq(-2).should('have.text',"Questo input è sbagliato, leggere l'errore nel campo")});
  
///////////////////////////////////////////////////////////////////////
//								       //
//								       //
//								       //
//				REASON	       		       //
//								       //
//								       //
//								       //
/////////////////////////////////////////////////////////////////////// 

  
  //PROVA A VEDERE SE TUTTI GLI INPUT SI INSERISCONO, uguale per gli altri valori
  it.only('type age field of form with an wrong input',()=>{
  cy.get('#field-reason').type('Parla con un esperto')
  cy.get('#field-reason input').eq(1).should('have.value','Parla con un esperto')
  cy.get('#field-reason').type('Aiuto')
  cy.get('#field-reason input').eq(1).should('have.value','Aiuto')
  cy.get('#field-reason').type('Domanda')
  cy.get('#field-reason input').eq(1).should('have.value','Domanda')
  cy.get('#field-reason').type('Richiesta di lavoro')
  cy.get('#field-reason input').eq(1).should('have.value','Richiesta di lavoro')
  cy.get('#field-reason').type('Prova')
  cy.get('#field-reason input').eq(1).should('have.value','')
  }); 
    //PROVA A VEDERE SE TUTTI GLI INPUT, uguale per gli altri valori,INPUT HIDDEN
  /*it.only('select age field of form with an wrong input',()=>{
  cy.get('.react-select__indicators').eq(0).click()
  cy.get('#react-select-2-option-0').click()
  cy.get('#field-reason input').eq(1).should('have.value','Maschio')
  cy.get('.react-select__indicators').eq(0).click()
  cy.get('#react-select-2-option-1').click()
  cy.get('#field-reason input').eq(1).should('have.value','Femmina')
   cy.get('.react-select__indicators').eq(0).click()
  cy.get('#react-select-2-option-2').click()
  cy.get('#field-reason input').eq(1).should('have.value','Altro')
  }); */


///////////////////////////////////////////////////////////////////////
//								       //
//								       //
//								       //
//				NOTE	       		       //
//								       //
//								       //
//								       //
///////////////////////////////////////////////////////////////////////
    //PROVA A VEDERE SE COMPARE IL TOAST PER LE NOTE RELATIVO AL FATTO CHE È RICHIESTO
   it('leave notes field of form empty',()=>{
  cy.get('#field-notes input').should('have.css','background-color','rgb(255, 255, 255)')
  cy.get('#field-name').type('try')
  cy.get('.submit-block-button ').click()
  cy.wait(5000)
  cy.get('.Toastify__toast--error div h4').eq(-1).should('have.text','Errore contenuto Note' )
  cy.get('.Toastify__toast--error div p').eq(-1).should('have.text','Questo campo è obbligatorio')});

})
