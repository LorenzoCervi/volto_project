import React from "react";
import MyFormEdit from "./Edit.jsx";
import {render} from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from 'react-intl-redux';


import { TextWidget,TextareaWidget} from '@plone/volto/components';
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

const mycomp=(
	<Provider store={store} >	
		<MyFormEdit/>
	</Provider>
);


//SNAPSHOT
test("render the entire component in a Snapshot using the view component", ()=>{
 	
	const component=renderer.create(mycomp);
	const tree=component.toJSON();
	expect(tree).toMatchSnapshot();
	});
	


//UNIT TEST
