import React from 'react';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import {
  TextWidget,
  SelectWidget,
  CheckboxWidget,
} from '@plone/volto/components';

const messages = defineMessages({
  label: {
    id: 'Label',
    defaultMessage: 'Label',
  },
  requiredT: {
    id: 'Required',
    defaultMessage: 'Required for Textarea',
  },
});

const TextAreaSidebar = (props) => {
  const value = props.data.textarea;
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="TextArea" defaultMessage="TextArea" />
        </h2>
      </header>
      <Segment className="form sidebar-image-data">
        <TextWidget
          id="external"
          title={props.intl.formatMessage(messages.label)}
          required={true}
          value={value}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              textarea: v,
            });
          }}
        />
      </Segment>
      <Segment className="form sidebar-textarea-data">
        <CheckboxWidget
          id="external"
          title={props.intl.formatMessage(messages.requiredT)}
          value={props.data.requiredT}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              requiredT: v,
            });
          }}
        />
      </Segment>
    </Segment.Group>
  );
};

export default injectIntl(TextAreaSidebar);

