import React from 'react';
import { Segment } from 'semantic-ui-react';
import { CheckboxWidget, TextWidget } from '@plone/volto/components';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  Placeholder: {
    id: 'placeholder',
    defaultMessage: 'Placeholder',
  },
  Required: {
    id: 'required',
    defaultMessage: 'Required',
  },
});

const MySelectSidebar = (props) => {
  const { data, block, onChangeBlock, required = false, intl } = props;
  return (
    <Segment.Group raised>
      <header>
        <h2>
          <FormattedMessage id="Name" defaultMessage="Name" />
        </h2>
      </header>
      <Segment className="form sidebar-image-data">
        <TextWidget
          id="placeholder"
          title={intl.formatMessage(messages.Placeholder)}
          value={props.data?.placeholderN ?? ''}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              placeholderN: v,
            });
          }}
        />
      </Segment>
      <Segment className="form sidebar-image-data">
        <CheckboxWidget
          id="required"
          title={intl.formatMessage(messages.Required)}
          value={props.data?.requiredName ?? false}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              requiredName: v,
            });
          }}
        />
      </Segment>
      <header>
        <h2>
          <FormattedMessage id="Email" defaultMessage="Email" />
        </h2>
      </header>

      <Segment className="form sidebar-image-data">
        <CheckboxWidget
          id="required"
          title={intl.formatMessage(messages.Required)}
          value={props.data?.requiredEmail ?? false}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              requiredEmail: v,
            });
          }}
        />
      </Segment>

      <header>
        <h2>
          <FormattedMessage id="Age" defaultMessage="Age" />
        </h2>
      </header>
      <Segment className="form sidebar-image-data">
        <CheckboxWidget
          id="required"
          title={intl.formatMessage(messages.Required)}
          value={props.data?.requiredAge ?? false}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              requiredAge: v,
            });
          }}
        />
      </Segment>

      <header>
        <h2>
          <FormattedMessage id="Sex" defaultMessage="Sex" />
        </h2>
      </header>
      <Segment className="form sidebar-image-data">
        <CheckboxWidget
          id="required"
          title={intl.formatMessage(messages.Required)}
          value={props.data?.requiredSex ?? false}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              requiredSex: v,
            });
          }}
        />
      </Segment>

      <header>
        <h2>
          <FormattedMessage id="City" defaultMessage="City" />
        </h2>
      </header>
      <Segment className="form sidebar-image-data">
        <TextWidget
          id="placeholder"
          title={intl.formatMessage(messages.Placeholder)}
          value={props.data?.placeholderC ?? ''}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              placeholderC: v,
            });
          }}
        />
      </Segment>
      <Segment className="form sidebar-image-data">
        <CheckboxWidget
          id="required"
          title={intl.formatMessage(messages.Required)}
          value={props.data?.requiredCity ?? false}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              requiredCity: v,
            });
          }}
        />
      </Segment>

      <header>
        <h2>
          <FormattedMessage id="Notes" defaultMessage="Notes" />
        </h2>
      </header>
      <Segment className="form sidebar-image-data">
        <TextWidget
          id="placeholder"
          title={intl.formatMessage(messages.Placeholder)}
          value={props.data?.placeholderNotes ?? ''}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              placeholderNotes: v,
            });
          }}
        />
      </Segment>
      <Segment className="form sidebar-image-data">
        <CheckboxWidget
          id="required"
          title={intl.formatMessage(messages.Required)}
          value={props.data?.requiredNotes ?? false}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              requiredNotes: v,
            });
          }}
        />
      </Segment>
    </Segment.Group>
  );
};

MySelectSidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default injectIntl(MySelectSidebar);
