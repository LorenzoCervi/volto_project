import React from "react";
import MyFormView from "./View.jsx";
import {render} from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from 'react-intl-redux';


import { TextWidget,TextareaWidget} from '@plone/volto/components';
import EmailWidget from '@package/components/EmailWidget/EmailWidget';
import NumberWidget from '@package/components/NumberWidget/NumberWidget';


import configureStore from 'redux-mock-store';

const mockStore = configureStore();


const store = mockStore({
      intl: {
        locale: 'en',
        messages: {},
      },
    });

const mycomp=(
	<Provider store={store} >	
		<MyFormView/>
	</Provider>
);


//SNAPSHOT
test("render the entire component in a Snapshot using the view component", ()=>{
 	
	const component=renderer.create(mycomp);
	const tree=component.toJSON();
	expect(tree).toMatchSnapshot();
	});
	


//UNIT TEST
