import React from 'react';
import MyFormView from './View.jsx';
import { render, getByLabelText } from '@testing-library/react';
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
    <MyFormView data={{
    requiredN:true,
    }} />
  </Provider>
);

const mycomp2 = (
  <Provider store={store}>
    <MyFormView data={{
    requiredE:true,
    }} />
  </Provider>
);

//SNAPSHOT
test('render the entire component in a Snapshot using the view component', () => {
  const component = renderer.create(mycomp2);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//UNIT TEST

//CERCO SE NEL RENDERIZZARE LA VIEW ESISTONO QUESTI COMPONENTI
/*describe('See if there are the right type of widget', () => {
  
  test('See if there are the TextWidget', () => {
    render(mycomp);
    expect.any(<TextWidget />);
  });
  test('See if there are the TextareaWidget', () => {
    render(mycomp);
    expect.any(<TextareaWidget />);
  });
  test('See if there are the EmailWidget', () => {
    expect.any(<EmailWidget  />);
  });
  test('See if there are the NumberWidget', () => {
    expect.any(<NumberWidget />);
  });
  test('See if there are the SelectMyWidget', () => {
    expect.any(<SelectMyWidget  />);
  });
});*/

//TEST PER VEDERE SE LE VARIE ETICHETTE HANNO I NOMI GIUSTI E I CAMPI PREIMPOSTATI HANNO I VALORI DI DEFAULT
describe("test if labels are correctly rendered",()=>{
  

  test("Name label",()=>{
    const {getByLabelText}=render (mycomp);
    const labelName=getByLabelText("Name");
		expect(labelName).toBeInTheDocument();
  });
  test("Email label",()=>{
    const {getByLabelText}=render (mycomp);
    const labelEmail=getByLabelText("Email");
		expect(labelEmail).toBeInTheDocument();
  });
  test("Age label",()=>{
    const {getByLabelText}=render (mycomp);
    const labelAge=getByLabelText("Age");
		expect(labelAge).toBeInTheDocument();
  });
  test("Sex label",()=>{
    const {getByLabelText}=render (mycomp);
    const labelSex=getByLabelText("Sex");
		expect(labelSex).toBeInTheDocument();
  });
  test("City label",()=>{
    const {getByLabelText}=render (mycomp);
    const labelCity=getByLabelText("City");
		expect(labelCity).toBeInTheDocument();
  });
  test("Reason label",()=>{
    const {getByLabelText}=render (mycomp);
    const labelReason=getByLabelText("Reason");
		expect(labelReason).toBeInTheDocument();
  });
  test("Notes label",()=>{
    const {getByLabelText}=render (mycomp);
    const labelNotes=getByLabelText("Notes");
		expect(labelNotes).toBeInTheDocument();
  });
  
  test("search for input field, might be 7",()=>{
    		const {getAllByDisplayValue}=render (mycomp);
    		const Input= getAllByDisplayValue('');
    		expect(Input).toHaveLength(7);
   });
   test("search for input age with default value 18",()=>{
    		const {getAllByDisplayValue}=render (mycomp);
    		const Input= getAllByDisplayValue('18');
    		expect(Input).toHaveLength(1);
   });
   test("search for select field input hidden of sex",()=>{
    		const {getByText}=render (mycomp);
    		const Input= getByText("Choose");
    		expect(Input).toBeInTheDocument();
   });
   test("search for select field input hidden of reason",()=>{
    		const {getByText}=render (mycomp);
    		const Input= getByText("Talk with an Expert");
    		expect(Input).toBeInTheDocument();
   });
   



});


//SUITE PER TESTARE LE PROPS DI VIEW
describe("see if forms are correctly required",()=>{
  	test("",()=>{
  	const {getByLabelText}=render (mycomp2);
  	const nameI=getByLabelText('Name');
	expect
  });


});

describe("",()=>{
  
	test("",()=>{

  });

});


