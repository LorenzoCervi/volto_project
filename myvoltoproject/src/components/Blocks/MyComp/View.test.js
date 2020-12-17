import React from 'react';
import MyFormView from './View.jsx';
import { render, toHaveAttribute } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-intl-redux';
import '@testing-library/jest-dom/extend-expect';

import { TextWidget, TextareaWidget } from '@plone/volto/components';
import EmailWidget from '@package/components/EmailWidget/EmailWidget';
import NumberWidget from '@package/components/NumberWidget/NumberWidget';
import SelectMyWidget from '@package/components/SelectMyWidget/SelectMyWidget';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

const mycomp = (
  <Provider store={store}>
    <MyFormView data={{}} />
  </Provider>
);

const mycomp2 = (
  <Provider store={store}>
    <MyFormView
      data={{
        placeholderN: 'Questo è un placeholder del Nome',
        placeholderC: 'Questo è un placeholder della Città',
        placeholderNotes: 'Questo è un placeholder delle Note',
        requiredName: true,
        requiredAge: true,
        requiredSex: true,
        requiredCity: true,
        requiredNotes: true,
      }}
    />
  </Provider>
);

//SNAPSHOT
test('render the entire component in a Snapshot using the view component', () => {
  const component = renderer.create(mycomp);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
/*test('render the entire component in a Snapshot using the view component', () => {
  const component2 = renderer.create(mycomp2);
  const tree2 = component2.toJSON();
  expect(tree2).toMatchSnapshot();
});*/
//UNIT TEST

//TEST PER VEDERE SE LE VARIE ETICHETTE HANNO I NOMI GIUSTI E I CAMPI PREIMPOSTATI HANNO I VALORI DI DEFAULT
describe('test if labels are correctly rendered', () => {
  test('Name label', () => {
    const { getByLabelText } = render(mycomp);
    const labelName = getByLabelText('Name');
    expect(labelName).toBeInTheDocument();
  });
  test('Email label', () => {
    const { getByLabelText } = render(mycomp);
    const labelEmail = getByLabelText('Email');
    expect(labelEmail).toBeInTheDocument();
  });
  test('Age label', () => {
    const { getByLabelText } = render(mycomp);
    const labelAge = getByLabelText('Age');
    expect(labelAge).toBeInTheDocument();
  });
  test('Sex label', () => {
    const { getByLabelText } = render(mycomp);
    const labelSex = getByLabelText('Sex');
    expect(labelSex).toBeInTheDocument();
  });
  test('City label', () => {
    const { getByLabelText } = render(mycomp);
    const labelCity = getByLabelText('City');
    expect(labelCity).toBeInTheDocument();
  });
  test('Reason label', () => {
    const { getByLabelText } = render(mycomp);
    const labelReason = getByLabelText('Reason');
    expect(labelReason).toBeInTheDocument();
  });
  test('Notes label', () => {
    const { getByLabelText } = render(mycomp);
    const labelNotes = getByLabelText('Notes');
    expect(labelNotes).toBeInTheDocument();
  });
});

//SUITE PER TESTARE GLI ELEMENTI DI VIEW
describe('see if view is correctly rendered', () => {
  test('search for input field, might be 7', () => {
    const { getAllByDisplayValue } = render(mycomp);
    const Input = getAllByDisplayValue('');
    expect(Input).toHaveLength(7);
  });
  test('search for input age with default value 18', () => {
    const { getAllByDisplayValue } = render(mycomp);
    const Input = getAllByDisplayValue('18');
    expect(Input).toHaveLength(1);
  });
  test('search for select field input hidden of sex', () => {
    const { getByText } = render(mycomp);
    const Input = getByText('Choose');
    expect(Input).toBeInTheDocument();
  });
  test('search for select field input hidden of reason', () => {
    const { getByText } = render(mycomp);
    const Input = getByText('Talk with an Expert');
    expect(Input).toBeInTheDocument();
  });
  test('search send button', () => {
    const { getByRole } = render(mycomp);
    const subbutt = getByRole('button', { name: 'Send' });
    expect(subbutt).toBeInTheDocument();
  });
  test('search for sex preview', () => {
    const { getByText } = render(mycomp);
    const sexMes = getByText('Choose');
    expect(sexMes).toBeInTheDocument();
  });

  test('age input', () => {
    const { getByRole } = render(mycomp);
    const ageI = getByRole('spinbutton', { name: '' });
    expect(ageI).toHaveProperty('value', '18');
  });
});

///////////////////////////////////////////////////////////////////////
//								       //
//								       //
//								       //
//		SUITES PER TESTING PROPS DEI VARI INPUT	       //
//								       //
//								       //
//								       //
///////////////////////////////////////////////////////////////////////

const { getAllByRole } = render(mycomp);
const TextBoxInputFields = getAllByRole('textbox', { name: '' });
const Name = TextBoxInputFields[0];
const Email = TextBoxInputFields[1];
const Sex = TextBoxInputFields[2];
const City = TextBoxInputFields[3];
const Reason = TextBoxInputFields[4];
const Notes = TextBoxInputFields[5];

//NAME FIELD
describe('control name field props', () => {
  test('name input id', () => {
    expect(Name).toHaveProperty('id', 'field-name');
  });
  test('name input name', () => {
    expect(Name).toHaveProperty('name', 'name');
  });
  test('name input placeholder', () => {
    expect(Name).toHaveProperty('placeholder', '');
  });
  test('name input type', () => {
    expect(Name).toHaveProperty('type', 'text');
  });
  test('name input value', () => {
    expect(Name).toHaveProperty('value', '');
  });
});

//EMAIL FIELD
describe('control email field props', () => {
  test('email input id', () => {
    expect(Email).toHaveProperty('id', 'field-email');
  });
  test('email input name', () => {
    expect(Email).toHaveProperty('name', 'email');
  });
  test('email input placeholder', () => {
    expect(Email).toHaveProperty('placeholder', '');
  });
  test('email input type', () => {
    expect(Email).toHaveProperty('type', 'email');
  });
  test('email input value', () => {
    expect(Email).toHaveProperty('value', '');
  });
});

//AGE FIELD
describe('control age field props', () => {
  const Age = getAllByRole('spinbutton', { name: '' });
  test('age input id', () => {
    expect(Age[0]).toHaveProperty('id', 'field-age');
  });
  test('age input name', () => {
    expect(Age[0]).toHaveProperty('name', 'age');
  });
  test('age input min', () => {
    expect(Age[0]).toHaveProperty('min', '18');
  });
  test('age input max', () => {
    expect(Age[0]).toHaveProperty('max', '100');
  });
  test('age input type', () => {
    expect(Age[0]).toHaveProperty('type', 'number');
  });
  test('age input value', () => {
    expect(Age[0]).toHaveProperty('value', '18');
  });

  //SEX FIELD
  describe('control sex field props', () => {
    test('sex input name', () => {
      expect(Sex).toHaveProperty('id', 'react-select-2-input');
    });

    test('sex input type', () => {
      expect(Sex).toHaveProperty('type', 'text');
    });
    test('sex input value', () => {
      expect(Sex).toHaveProperty('value', '');
    });
  });
  //CITY FIELD
  describe('control city field props', () => {
    test('city input id', () => {
      expect(City).toHaveProperty('id', 'field-city');
    });
    test('city input name', () => {
      expect(City).toHaveProperty('name', 'city');
    });
    test('city input placeholder', () => {
      expect(City).toHaveProperty('placeholder', '');
    });
    test('city input type', () => {
      expect(City).toHaveProperty('type', 'text');
    });
    test('city input value', () => {
      expect(City).toHaveProperty('value', '');
    });
  });
  //REASON FIELD
  describe('control reason field props', () => {
    test('reason input name', () => {
      expect(Reason).toHaveProperty('id', 'react-select-3-input');
    });

    test('reason input type', () => {
      expect(Reason).toHaveProperty('type', 'text');
    });
    test('reason input value', () => {
      expect(Reason).toHaveProperty('value', '');
    });
  });
  //NOTES FIELD
  describe('control notes field props', () => {
    test('notes input id', () => {
      expect(Notes).toHaveProperty('id', 'field-notes');
    });
    test('notes input name', () => {
      expect(Notes).toHaveProperty('name', 'notes');
    });
    test('notes input type', () => {
      expect(Notes).toHaveProperty('type', 'textarea');
    });
    test('notes input value', () => {
      expect(Notes).toHaveProperty('value', '');
    });
  });
});

//PLACEHOLDERS ON SECOND VIEW COMPONENT
const { getAllByPlaceholderText } = render(mycomp2);
const TextBoxInputFields2 = getAllByPlaceholderText(
  /Questo è un placeholder del/,
);
const Name2 = TextBoxInputFields2[0];
const City2 = TextBoxInputFields2[1];
const Notes2 = TextBoxInputFields2[2];
describe('Placeholders test', () => {
  test('Name Placeholder', () => {
    expect(Name2).toHaveProperty('id', 'field-name');
  });
  test('City Placeholder', () => {
    expect(City2).toHaveProperty('id', 'field-city');
  });
  test('Notes Placeholder', () => {
    expect(Notes2).toHaveProperty('id', 'field-notes');
  });
});
//TESTING THE REQUIRED PROP
describe('Required props', () => {
  test('required name', () => {
    const { container } = render(mycomp2);
    const reqN = container.querySelector('#field-name');
    expect(reqN).toHaveProperty('className', 'inline required field text');
  });
  test('required email', () => {
    const { container } = render(mycomp2);
    const reqE = container.querySelector('#field-email');
    expect(reqE).toHaveProperty('className', 'inline required field email');
  });
  test('required age', () => {
    const { container } = render(mycomp2);
    const reqA = container.querySelector('#field-age');
    expect(reqA).toHaveProperty('className', 'inline required field number');
  });
  test('required sex', () => {
    const { container } = render(mycomp2);
    const reqS = container.querySelector('#field-sex');
    expect(reqS).toHaveProperty('className', 'inline required field myselect');
  });
  test('required city', () => {
    const { container } = render(mycomp2);
    const reqC = container.querySelector('#field-city');
    expect(reqC).toHaveProperty('className', 'inline required field text');
  });
  test('required reason', () => {
    const { container } = render(mycomp2);
    const reqR = container.querySelector('#field-reason');
    expect(reqR).toHaveProperty('className', 'inline required field myselect');
  });
  test('required notes', () => {
    const { container } = render(mycomp2);
    const reqNo = container.querySelector('#field-notes');
    expect(reqNo).toHaveProperty('className', 'inline required field textarea');
  });
});

