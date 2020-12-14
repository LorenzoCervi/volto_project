import React, { useState, useEffect } from 'react';
import { TextWidget, TextareaWidget, Toast } from '@plone/volto/components';
import { Form, Button } from 'semantic-ui-react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { emailNotification } from '@plone/volto/actions';
import { useSelector, useDispatch } from 'react-redux';

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
  Male: {
    id: 'male',
    defaultMessage: 'Male',
  },
  Female: {
    id: 'female',
    defaultMessage: 'Female',
  },
  Other: {
    id: 'other',
    defaultMessage: 'Other',
  },
  Help: {
    id: 'help',
    defaultMessage: 'Help',
  },
  Question: {
    id: 'question',
    defaultMessage: 'Question',
  },
  Job: {
    id: 'job',
    defaultMessage: 'Job Request',
  },
  Expert: {
    id: 'expert',
    defaultMessage: 'Talk with an Expert',
  },
  Sexdef: {
    id: 'sexdef',
    defaultMessage: 'Choose',
  },
  InvalidName: {
    id: 'invName',
    defaultMessage:
      'Name CAN NOT contain numbers or symbols, and it has to have a lenght of 2',
  },
  InvalidEmail: {
    id: 'invEmail',
    defaultMessage: 'Wrong input Email, (myemail@domain.nat)',
  },
  InvalidAge: {
    id: 'invAge',
    defaultMessage: 'Wrong input Age, (range:18-100)',
  },
  InvalidCity: {
    id: 'invCity',
    defaultMessage:
      'Wrong input City, (must be in Capital letters),and it has to have a lenght of 2',
  },
  ErrorAllFields: {
    id: 'errAfield',
    defaultMessage: 'Error Fields',
  },
  ErrorContAll: {
    id: 'errcntA',
    defaultMessage:
      'None of the required fields is filled,except Age and Reason',
  },
  ErrorCont1: {
    id: 'errcnt1',
    defaultMessage: 'This input is wrong, read the error',
  },
  ErrorCont2: {
    id: 'errcnt2',
    defaultMessage: 'This field is required',
  },
  ErrorName: {
    id: 'errName',
    defaultMessage: 'Error Name',
  },
  ErrorEmail: {
    id: 'errEmail',
    defaultMessage: 'Error Email',
  },
  ErrorAge: {
    id: 'errAge',
    defaultMessage: 'Error Age',
  },
  ErrorSex: {
    id: 'errSex',
    defaultMessage: 'Error Sex',
  },
  ErrorCity: {
    id: 'errCity',
    defaultMessage: 'Error City',
  },
  ErrorNotes: {
    id: 'errNotes',
    defaultMessage: 'Error Notes',
  },
  NotSuccess:{
    id:'notsucc',
    defaultMessage:'Not Success!',
  },
  NotSuccessSub:{
    id:'notsuccSub',
    defaultMessage:'It is not possible to send request, check fields',
  },
  Success: {
    id: 'succ',
    defaultMessage: 'Success!',
  },
  SuccessSub: {
    id: 'succSub',
    defaultMessage: 'All contents are submitted',
  },
});

//regex:tutte le parole che non hanno ne numeri ne simboli
const isValidName = (textN) => {
  return (
    (/(^|\s)[a-zA-Z]+(\s|$)/g.test(textN) && textN?.length >= 2) ||
    textN === '' ||
    textN === undefined
  );
  //quindi l'argomento contiene numero o simboli
};
//se matcha vuol dire che è una mail, quindi torna true, quindi in error negata tornerà false e quindi non mostrerà un errore, viceversa tornerà false e quindi true e quindi mostrerà l'errore
const isValidEmail = (textE) => {
  return (
    /([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi.test(textE) ||
    textE === '' ||
    textE === undefined
  );
};
//regex:tutto ciò che non è una cifra da 0 a 9
/*const isInvalidNum=(numA)=>{
  	return(/[^0-9]/g.test(numA));
  	//quindi l'argomento contiene solo numeri
  };*/

//regex:tutto ciò che non è una cifra da 0 a 9 o lettere minuscole
const isValidCity = (textC) => {
  return (
    (/(^|\s)[A-Z]+(\s|$)/g.test(textC) && textC?.length >= 2) ||
    textC === '' ||
    textC === undefined
  );
};

const clicked = (states, reqFields, intl) => {
  let problem=false;
  if (
    reqFields.reqN === true &&
    (states.Name === '' || states.Name === undefined) &&
    reqFields.reqE === true &&
    (states.Email === '' || states.Email === undefined) &&
    reqFields.reqS === true &&
    (states.Sex.value === '' || states.Sex.value === undefined) &&
    reqFields.reqC === true &&
    (states.City === '' || states.City === undefined) &&
    reqFields.reqNo === true &&
    (states.Notes === '' || states.Notes === undefined)
  ) {
    toast.error(
      <Toast
        error
        title={intl.formatMessage(messages.ErrorAllFields)}
        content={intl.formatMessage(messages.ErrorContAll)}
      />,
    );

    return;
  }

  if (
    reqFields.reqN === true &&
    (states.Name === '' ||
      states.Name === undefined ||
      !isValidName(states.Name))
  ) {
    problem = true;
    if (!isValidName(states.Name)) {
      toast.error(
        <Toast
          error
          title={intl.formatMessage(messages.ErrorName)}
          content={intl.formatMessage(messages.ErrorCont1)}
        />,
      );
    } else {
      toast.error(
        <Toast
          error
          title={intl.formatMessage(messages.ErrorName)}
          content={intl.formatMessage(messages.ErrorCont2)}
        />,
      );
    }
  }
  if (
    reqFields.reqE === true &&
    (states.Email === '' ||
      states.Email === undefined ||
      !isValidEmail(states.Email))
  ) {
  problem = true;
    if (!isValidEmail(states.Email))
      toast.error(
        <Toast
          error
          title={intl.formatMessage(messages.ErrorEmail)}
          content={intl.formatMessage(messages.ErrorCont1)}
        />,
      );
    else
      toast.error(
        <Toast
          error
          title={intl.formatMessage(messages.ErrorEmail)}
          content={intl.formatMessage(messages.ErrorCont2)}
        />,
      );
  }

  if (isNaN(states.Age) || states.Age < 18 || states.Age > 100) {
  problem = true;
    toast.error(
      <Toast
        error
        title={intl.formatMessage(messages.ErrorAge)}
        content={intl.formatMessage(messages.ErrorCont1)}
      />,
    );
    if (reqFields.reqA === true) {
      toast.error(
        <Toast
          error
          title={intl.formatMessage(messages.ErrorAge)}
          content={intl.formatMessage(messages.ErrorCont2)}
        />,
      );
    }
    
  }

  if (
    reqFields.reqS === true &&
    (states.Sex.value === '' || states.Sex.value === undefined)
  ) {
  problem = true;
    toast.error(
      <Toast
        error
        title={intl.formatMessage(messages.ErrorSex)}
        content={intl.formatMessage(messages.ErrorCont2)}
      />,
    );
    
  }
  if (
    reqFields.reqC === true &&
    (states.City === '' ||
      states.City === undefined ||
      !isValidCity(states.City))
  ) {
  problem = true;
    if (!isValidCity(states.City))
      toast.error(
        <Toast
          error
          title={intl.formatMessage(messages.ErrorCity)}
          content={intl.formatMessage(messages.ErrorCont1)}
        />,
      );
    else
      toast.error(
        <Toast
          error
          title={intl.formatMessage(messages.ErrorCity)}
          content={intl.formatMessage(messages.ErrorCont2)}
        />,
      );
    
  }
  if (
    reqFields.reqNo === true &&
    (states.Notes === '' || states.Notes === undefined)
  ) {
  problem = true;
    toast.error(
      <Toast
        error
        title={intl.formatMessage(messages.ErrorNotes)}
        content={intl.formatMessage(messages.ErrorCont2)}
      />,
    );
    
  }

  if (problem === false) {
    
    console.dir(states);
  }
  return problem;
};
////////////////////////////////////////////////////////////////////
const MyFormView = ({ data, intl, ...rest }) => {
  
  const [textN, setTextN] = useState('');
  const [textE, setTextE] = useState('');
  const [numA, setNumA] = useState(18);
  const [selS, setSelS] = useState({
    value: '',
    label: intl.formatMessage(messages.Sexdef),
  });
  const [textC, setTextC] = useState('');
  const [selR, setSelR] = useState({
    value: intl.formatMessage(messages.Expert),
    label: intl.formatMessage(messages.Expert),
  });
  const [textareaNo, setTextareaNo] = useState('');
  
  const states = {
    Name: textN,
    Email: textE,
    Age: numA,
    Sex: selS,
    City: textC,
    Reason: selR,
    Notes: textareaNo,
  };
  const reqFields = {
    reqN: data.requiredName,
    reqE: data.requiredEmail,
    reqA: data.requiredAge,
    reqS: data.requiredSex,
    reqC: data.requiredCity,
    reqNo: data.requiredNotes,
  };
  const submitResults = useSelector((state) => state.emailNotification);
  const dispatch = useDispatch();
  
  useEffect(() => {
    
      if (submitResults?.loaded) {
        toast.success(
          <Toast
            success
            title={intl.formatMessage(messages.Success)}
            content={intl.formatMessage(messages.SuccessSub)}
          />,
        );
        setTextN('');
        setTextE('');
        setNumA(18);
        setSelS({
    		value: '',
    		label: intl.formatMessage(messages.Sexdef),
  		});
  	setTextC('');
  	setSelR({
    		value: intl.formatMessage(messages.Expert),
    		label: intl.formatMessage(messages.Expert),
  		});
  	setTextareaNo('');
      } else if (submitResults?.error) {
        let errorDescription = `${submitResults.error.status} ${
          submitResults.error.message
        }- ${JSON.parse(submitResults.error.response?.text ?? {})?.message}`;
        toast.error(<Toast error title={intl.formatMessage(messages.NotSuccess)} content={intl.formatMessage(messages.NotSuccessSub)} />);
      }
    }, [submitResults]);
    const submit = () => {
    if(!clicked(states,reqFields,intl)){
      dispatch(
        emailNotification(
          textE,
          `${intl.formatMessage(messages.Name)}: ${textN}.\n${intl.formatMessage(messages.Age)}: ${numA}.\n${intl.formatMessage(messages.Sex)}: ${selS.value}.\n${intl.formatMessage(messages.City)}: ${textC}.\n${intl.formatMessage(messages.Reason)}:${selR.value}.\n\n${intl.formatMessage(messages.Notes)}: ${textareaNo}.\n\n`,
          selR,
        ),
      );
    }};

  return (
    <>
      <Form onSubmit={submit}>
        <TextWidget
          id="name"
          title={intl.formatMessage(messages.Name)}
          required={data?.requiredName ?? false}
          value={textN}
          placeholder={data?.placeholderN ?? ''}
          onChange={(id, value) => setTextN(value)}
          error={
            !isValidName(textN)
              ? [intl.formatMessage(messages.InvalidName)]
              : []
          }
        />
        <EmailWidget
          id="email"
          title="Email"
          required={data?.requiredEmail ?? false}
          value={textE}
          onChange={(id, value) => setTextE(value)}
          error={
            !isValidEmail(textE)
              ? [intl.formatMessage(messages.InvalidEmail)]
              : []
          }
        />
        <NumberWidget
          id="age"
          title={intl.formatMessage(messages.Age)}
          required={data?.requiredAge ?? false}
          value={numA}
          onChange={(id, value) => setNumA(value)}
          onClick={() => {}}
          onBlur={() => {}}
          minimum={18}
          maximum={100}
          error={
            numA < 18 || numA > 100 || isNaN(numA)
              ? [intl.formatMessage(messages.InvalidAge)]
              : []
          }
        />
        <SelectMyWidget
          id="sex"
          title={intl.formatMessage(messages.Sex)}
          required={data?.requiredSex ?? false}
          value={selS}
          choices={[
            { value: intl.formatMessage(messages.Male), label: intl.formatMessage(messages.Male) },
            { value: intl.formatMessage(messages.Female) , label: intl.formatMessage(messages.Female) },
            { value: intl.formatMessage(messages.Other), label: intl.formatMessage(messages.Other) },
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
          error={
            !isValidCity(textC)
              ? [intl.formatMessage(messages.InvalidCity)]
              : []
          }
        />
        <SelectMyWidget
          id="reason"
          title={intl.formatMessage(messages.Reason)}
          required={true}
          value={selR}
          choices={[
            {
              value: intl.formatMessage(messages.Expert),
              label: intl.formatMessage(messages.Expert),
            },
            { value: intl.formatMessage(messages.Help), label: intl.formatMessage(messages.Help) },
            { value: intl.formatMessage(messages.Question), label: intl.formatMessage(messages.Question) },
            { value: intl.formatMessage(messages.Job), label: intl.formatMessage(messages.Job) },
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

            type="submit"
          >
            <FormattedMessage id="send" defaultMessage="Send" />
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
