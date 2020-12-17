import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-intl-redux';
import { CheckboxWidget, TextWidget } from '@plone/volto/components';

import MySelectSidebar from './MySelectSidebar.jsx';
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
    <MySelectSidebar 
    data={{}} 
    block="BLOCK" 
    onChangeBlock={() => {}} 
    />
  </Provider>
);

//SNAPSHOT
test('render the entire component in a Snapshot using the sidebar component', () => {
  const component = renderer.create(mycomp);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//UNIT TEST

//SUITE PER CONTARE GLI ELEMENTI NELLA SIDEBAR
describe('searching',()=>{
  test('input field textbox',()=>{
  	const {getAllByRole}=render(mycomp);
  	const input=getAllByRole('textbox',{nome:''});
  	expect(input.length).toBe(3);
  });
   test('input field checkbox',()=>{
  	const {getAllByRole}=render(mycomp);
  	const input=getAllByRole('checkbox',{nome:''});
  	expect(input.length).toBe(5);
  });
     test('heading',()=>{
  	const {getAllByRole}=render(mycomp);
  	const input=getAllByRole('heading',{nome:''});
  	expect(input.length).toBe(5);
  });
});



//SUITE PER LE PROPS
//PER TEXTBOX
const {getAllByRole}=render(mycomp);
describe('texboxes props', () => {
	const textbox=getAllByRole('textbox',{nome:''});
	const Name=textbox[0];
	const City=textbox[1];
	const Notes=textbox[2];
  test('name input id', () => {
  	expect(Name).toHaveProperty('id', 'field-placeholder-name'); 
  });
  test('name input name', () => {
  	expect(Name).toHaveProperty('name', 'placeholder-name'); 
  });
  test('name input value', () => {
  	expect(Name).toHaveProperty('value', ''); 
  });
  test('name input type', () => {
  	expect(Name).toHaveProperty('type', 'text'); 
  });
  test('city input id', () => {
  	expect(City).toHaveProperty('id', 'field-placeholder-city'); 
  });
  test('city input name', () => {
  	expect(City).toHaveProperty('name', 'placeholder-city'); 
  });
  test('city input value', () => {
  	expect(City).toHaveProperty('value', ''); 
  });
  test('city input type', () => {
  	expect(City).toHaveProperty('type', 'text'); 
  });
    test('notes input id', () => {
  	expect(Notes).toHaveProperty('id', 'field-placeholder-notes'); 
  });
  test('notes input name', () => {
  	expect(Notes).toHaveProperty('name', 'placeholder-notes'); 
  });
  test('notes input value', () => {
  	expect(Notes).toHaveProperty('value', ''); 
  });
  test('notes input type', () => {
  	expect(Notes).toHaveProperty('type', 'text'); 
  });
});

describe('checkboxes props', () => {
	const checkbox=getAllByRole('checkbox',{nome:''});
	const Name=checkbox[0];
	const Age=checkbox[1];
	const Sex=checkbox[2];
	const City=checkbox[3];
	const Notes=checkbox[4];
  test('name input name', () => {
  	expect(Name).toHaveProperty('name', 'field-required-name'); 
  });
  test('name input value', () => {
  	expect(Name).toHaveProperty('value', ''); 
  });
  test('age input name', () => {
  	expect(Age).toHaveProperty('name', 'field-required-age'); 
  });
  test('age input value', () => {
  	expect(Age).toHaveProperty('value', ''); 
  });
  test('sex input name', () => {
  	expect(Sex).toHaveProperty('name', 'field-required-sex'); 
  });
  test('sex input value', () => {
  	expect(Sex).toHaveProperty('value', ''); 
  });
  test('city input name', () => {
  	expect(City).toHaveProperty('name', 'field-required-city'); 
  });
  test('city input value', () => {
  	expect(City).toHaveProperty('value', ''); 
  });
  test('notes input name', () => {
  	expect(Notes).toHaveProperty('name', 'field-required-notes'); 
  });
  test('notes input value', () => {
  	expect(Notes).toHaveProperty('value', ''); 
  });
});

