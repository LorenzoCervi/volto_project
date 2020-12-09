import React, { useState } from 'react';
import {
  SidebarPortal,
  TextWidget,
  TextareaWidget,
} from '@plone/volto/components';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import EmailWidget from '@package/components/EmailWidget/EmailWidget';
import NumberWidget from '@package/components/NumberWidget/NumberWidget';
import SelectMyWidget from '@package/components/SelectMyWidget/SelectMyWidget';

import MySelectSidebar from './MySelectSidebar';

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
});
const MyFormEdit = (props) => {
  const { data, block, onChangeBlock, required = false, intl } = props;
  return (
    <>
      <Form>
        <TextWidget
          id="name"
          title={intl.formatMessage(messages.Name)}
          required={props.data?.requiredName ?? false}
          placeholder={props.data?.placeholderN ?? ''}
          onChange={() => {}}
        />
        <EmailWidget
          id="email"
          title="Email"
          required={props.data?.requiredEmail ?? false}
          onChange={() => {}}
        />
        <NumberWidget
          id="age"
          title={intl.formatMessage(messages.Age)}
          required={props.data?.requiredAge ?? false}
          value="18"
          onChange={() => {}}
          onClick={() => {}}
          onBlur={() => {}}
        />
        <SelectMyWidget
          id="sex"
          title={intl.formatMessage(messages.Sex)}
          required={props.data?.requiredSex ?? false}
          value={{}}
          choices={[]}
          onChange={() => {}}
        />
        <TextWidget
          id="city"
          title={intl.formatMessage(messages.City)}
          required={props.data?.requiredCity ?? false}
          placeholder={props.data?.placeholderC ?? ''}
          onChange={() => {}}
        />
        <SelectMyWidget
          id="reason"
          title={intl.formatMessage(messages.Reason)}
          required={true}
          value={{}}
          choices={[]}
          onChange={() => {}}
        />

        <TextareaWidget
          id="notes"
          title={intl.formatMessage(messages.Notes)}
          required={props.data?.requiredNotes ?? false}
          placeholder={props.data?.placeholderNotes ?? ''}
          onChange={() => {}}
        />
      </Form>

      <SidebarPortal selected={props.selected ?? false}>
        <MySelectSidebar {...props} />
      </SidebarPortal>
    </>
  );
};

MyFormEdit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default injectIntl(MyFormEdit);
