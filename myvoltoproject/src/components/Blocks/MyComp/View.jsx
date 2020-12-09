import React, { useState } from 'react';
import { TextWidget, TextareaWidget, Toast } from '@plone/volto/components';
import { Form, Button } from 'semantic-ui-react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';

import EmailWidget from '@package/components/EmailWidget/EmailWidget';
import NumberWidget from '@package/components/NumberWidget/NumberWidget';
import SelectMyWidget from '@package/components/SelectMyWidget/SelectMyWidget';





const messages = defineMessages({
  Name: {
    id: 'name',
    defaultMessage: 'Name',
  },
  Age: {
    id: 'age',
    defaultMessage: 'Age',
  },
  Sex: {
    id: 'sex',
    defaultMessage: 'Sex',
  },
  City: {
    id: 'city',
    defaultMessage: 'City',
  },
  Reason: {
    id: 'reason',
    defaultMessage: 'Reason',
  },
  Notes: {
    id: 'notes',
    defaultMessage: 'Notes',
  },
  Male:{
    id:'male',
    defaultMessage:'Male',
  },
  Female:{
    id:'female',
    defaultMessage:'Female',
  },
  Other:{
    id:'other',
    defaultMessage:'Other',
  },
  Help:{
    id:'help',
    defaultMessage:'Help',
  },
  Question:{
    id:'question',
    defaultMessage:'Question',
  },
  Job:{
    id:'job',
    defaultMessage:'Job Request',
  },
  Assistent:{
    id:'assistent',
    defaultMessage:'Talk with an Expert',
  },
  Sexdef:{
    id:'sexdef',
    defaultMessage:'Choose',
  },
  InvalidName:{
    id:'invName',
    defaultMessage:'Name CAN NOT contain numbers or symbols',  
  },
  InvalidEmail:{
    id:'invEmail',
    defaultMessage:'Wrong input Email, (myemail@domain.nat)',
  },
  InvalidAge:{
    id:'invAge',
    defaultMessage:'Wrong input Age, (range:18-100)',
  },
  InvalidCity:{
    id:'invCity',
    defaultMessage:'Wrong input City, (must be in Capital letters)',
  },
});


 //regex:tutte le parole che non hanno ne numeri ne simboli
  const isValidName=(textN)=>{
  	return ((/(^|\s)[a-zA-Z]+(\s|$)/g.test(textN) && textN?.length>=2) ||  textN==='' || textN===undefined );
  	//quindi l'argomento contiene numero o simboli
  };
    //se matcha vuol dire che è una mail, quindi torna true, quindi in error negata tornerà false e quindi non mostrerà un errore, viceversa tornerà false e quindi true e quindi mostrerà l'errore
  const isValidEmail=(textE)=>{
  	return(/([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi.test(textE) || textE===''|| textE===undefined) ;
  	
  };
  //regex:tutto ciò che non è una cifra da 0 a 9
  /*const isInvalidNum=(numA)=>{
  	return(/[^0-9]/g.test(numA));
  	//quindi l'argomento contiene solo numeri
  };*/

  //regex:tutto ciò che non è una cifra da 0 a 9 o lettere minuscole
  const isValidCity=(textC)=>{
  	return((/(^|\s)[A-Z]+(\s|$)/g.test(textC) && textC?.length>=2) || textC==='' || textC===undefined) ;
  	
  };
  
  const clicked=(states,reqFields)=>{
  
    	/*if((reqFields.reqN===true && (states.Name==='' || states.Name===undefined)) &&
  	   (reqFields.reqE===true && (states.Email==='' || states.Email===undefined)) &&
  	   (reqFields.reqS===true && (states.Sex.value==='' || states.Sex.name===undefined)) &&
  	   (reqFields.reqC===true && (states.City==='' || states.City===undefined)) &&
  	   (reqFields.reqNo===true && (states.Notes==='' || states.Notes===undefined)) 
  	){
  		  	  toast.error(
  	   <Toast error title='Error Fields' content='None of the required fields is filled'/>,
  	   );
  	   return;
  	}*/
  switch(true){
    	case(reqFields.reqN===true && (states.Name===''|| states.Name===undefined || !isValidName(states.Name)) ):
  	{
  	   if(!isValidName(states.Name))
  	   {toast.error(
  	   <Toast error title='Error Name' content='This input is wrong, read the error'/>,
  	   );}
  	   else
  	  toast.error(
  	   <Toast error title='Error Name' content='This field is required'/>,
  	   );

       }
       case(reqFields.reqE===true && (states.Email==='' || states.Email===undefined|| !isValidEmail(states.Email))):
  	{
  	   if(!isValidEmail(states.Email))
  	   {toast.error(
  	   <Toast error title='Error Email' content='This input is wrong, read the error'/>,
  	   );}
  	  else
  	  toast.error(
  	   <Toast error title='Error Email' content='This field is required'/>,
  	   );
  	}

  	
  	case(isNaN(states.Age)):
  	{
  	  toast.error(
  	   <Toast error title='Error Age' content='This input is wrong, read the error'/>,
  	   );
  	}
  	
  	case(reqFields.reqS===true && (states.Sex.value==='' || states.Sex.value===undefined)):
  	{

  	  toast.error(
  	   <Toast error title='Error Sex' content='This field is required'/>,
  	   );
  	}
  	case(reqFields.reqC===true && (states.City==='' || states.City===undefined)):
  	{
  	  if(!isValidCity(states.City))
  	   {toast.error(
  	   <Toast error title='Error City' content='This input is wrong, read the error'/>,
  	   );}
  	  else
  	  toast.error(
  	   <Toast error title='Error City' content='This field is required'/>,
  	   );
  	}
  	case(reqFields.reqNo===true && (states.Notes==='' || states.Notes===undefined)):
  	{
  	  toast.error(
  	   <Toast error title='Error Notes' content='This field is required'/>,
  	   );
  	   break;
  	}
  	
  	default:
  	console.dir(states);
  	}
  		
  };

const MyFormView = ({ data, intl, ...rest }) => {
  const [textN, setTextN] = useState('');
  const [textE, setEmail] = useState('');
  const [numA, setNumA] = useState(18);
  const [selS, setSelS] = useState({ value: '', label: intl.formatMessage(messages.Sexdef) });
  const [textC, setTextC] = useState('');
  const [selR, setSelR] = useState({
    value: 'Talk with an expert',
    label: intl.formatMessage(messages.Assistent),
  });
  const [textareaNo, setTextareaNo] = useState('');
  const states={
  	Name: textN,
  	Email: textE,
  	Age: numA,
  	Sex: selS,
  	City: textC,
  	Reason: selR,
  	Notes: textareaNo, 
  };
  const reqFields={
  	reqN: data.requiredName,
  	reqE: data.requiredEmail,
  	reqA: data.requiredAge,
  	reqS: data.requiredSex,
  	reqC: data.requiredCity,
  	reqNo: data.requiredNotes,
  };

  return (
    <>
      <Form>
        <TextWidget
          id="name"
          title={intl.formatMessage(messages.Name)}
          required={data?.requiredName ?? false}
          value={textN}
          placeholder={data?.placeholderN ?? ''}
          onChange={(id, value) => setTextN(value)}
          error= {!isValidName(textN) ? [intl.formatMessage(messages.InvalidName)]:[]}
        />
        <EmailWidget
          id="email"
          title="Email"
          required={data?.requiredEmail ?? false}
          value={textE}
          onChange={(id, value) => setEmail(value)}
          error={ !isValidEmail(textE)  ? [intl.formatMessage(messages.InvalidEmail)] :[]}
        />
        <NumberWidget
          id="age"
          title={intl.formatMessage(messages.Age)}
          required={data?.requiredAge ?? false}
          value={numA}
          onChange={(id, value) => setNumA(value)}
	  onClick={()=>{}}
          onBlur={() => {}}
          minimum={18}
          maximum={100}	
          error={(numA<18 || numA>100 || isNaN(numA))  ? [intl.formatMessage(messages.InvalidAge)] : []
           }
        />
        <SelectMyWidget
          id="sex"
          title={intl.formatMessage(messages.Sex)}
          required={data?.requiredSex ?? false}
          value={selS}
          choices={[
            { value: 'Male',  label:intl.formatMessage(messages.Male) },
            { value: 'Female', label: intl.formatMessage(messages.Female) },
            { value: 'Other', label: intl.formatMessage(messages.Other) },
          ]}
          onChange={(option) => setSelS(option)}
          
        />
        <TextWidget
          id="city"
          title={intl.formatMessage(messages.City)}
          required={data?.requiredCity ?? false}
          value={textC}
          placeholder={data?.placeholderC ?? ''}
          onChange={(id, value) => setTextC(value)}
          error={ !isValidCity(textC) ? [intl.formatMessage(messages.InvalidCity)]:[]}
        />
        <SelectMyWidget
          id="reason"
          title={intl.formatMessage(messages.Reason)}
          required={true}
          value={selR}
          choices={[
            { value:'Talk with an expert' ,label:intl.formatMessage(messages.Assistent)},
            { value: 'Help', label: intl.formatMessage(messages.Help) },
            { value: 'Question', label: intl.formatMessage(messages.Question) },
            { value: 'Job-request', label: intl.formatMessage(messages.Job) },
          ]}
          onChange={(option) => setSelR(option)}
        />
        <TextareaWidget
          id="notes"
          title={intl.formatMessage(messages.Notes)}
          required={data?.requiredNotes ?? false}
          value={textareaNo}
          placeholder={data?.placeholderNotes ?? ''}
          onChange={(id, value) => setTextareaNo(value)}
        />
        
        <div>
          <Button
            primary
            className="submit-block-button view"
            onClick={() => clicked(states,reqFields)}
            type="submit"
          >
            <FormattedMessage id="Send" defaultMessage="Send" />
          </Button>
        </div>
      </Form>
    </>
  );
};

MyFormView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default injectIntl(MyFormView);
