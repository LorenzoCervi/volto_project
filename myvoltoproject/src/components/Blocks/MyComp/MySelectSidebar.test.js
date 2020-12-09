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
    <MySelectSidebar data={{}} block="BLOCK" onChangeBlock={() => {}} />
  </Provider>
);

//SNAPSHOT
test('render the entire component in a Snapshot using the view component', () => {
  const component = renderer.create(mycomp);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
