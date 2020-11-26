import React, { useState } from 'react';
import {
  SidebarPortal,
  TextWidget,
  CheckboxWidget,
  TextareaWidget,
  SelectWidget,
} from '@plone/volto/components';
import { Segment, Form } from 'semantic-ui-react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import EmailWidget from '@package/components/EmailWidget/EmailWidget';
import NumberWidget from '@package/components/NumberWidget/NumberWidget';
import SelectMyWidget from '@package/components/SelectMyWidget/SelectMyWidget';

const MyFormEdit = (props) => {
  return (
    <>
      <Form>
        <TextWidget
          id="name"
          title="Name"
          required={props.data?.requiredName??false}
          placeholder={props.data?.placeholderN??''}
          onChange={()=>{}}
        />
	<EmailWidget
	id="email"
	title="Email"
	required={props.data?.requiredEmail??false}
	onChange={()=>{}}
	/>	 
	<NumberWidget
	id="age"
	title="Age"
	required={props.data?.requiredAge??false}
	value="18"
	onChange={()=>{}}
	onClick={()=>{}}
	onBlur={()=>{}}
	/> 
	<SelectMyWidget
	id="sex"
	title="Sex"
	required={props.data?.requiredSex??false}
	value={{}}
	choices={[]}
	onChange={()=>{}}
	/>
	<TextWidget
	id="city"
	title="City"
	required={props.data?.requiredCity??false}
	placeholder={props.data?.placeholderC??''}
	onChange={()=>{}}
	/>
	<SelectMyWidget
	id="reason"
	title="Reason"
	required={true}
	value={{}}
	choices={[]}
	onChange={()=>{}}
	/>

	<TextareaWidget
	id="notes"
	title="Notes"
	required={props.data?.requiredNotes??false}
	placeholder={props.data?.placeholderNotes??''}
	onChange={()=>{}}
	/>     
      </Form>

      <SidebarPortal selected={props.selected??false}>
        <Segment.Group raised>
          <header>
            <h2>
              <FormattedMessage id="Name" defaultMessage="Name" />
            </h2>
          </header>
          <Segment className="form sidebar-image-data" >
            <TextWidget
              id="placeholder-name"
              title="Placeholder"
              value={props.data?.placeholderN??''}
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
              id="required-name"
              title="Required"
              value={props.data?.requiredName??false}
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
              id="required-email"
              title="Required"
              value={props.data?.requiredEmail??false}
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
              id="required-age"
              title="Required"
              value={props.data?.requiredAge??false}
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
              id="required-sex"
              title="Required"
              value={props.data?.requiredSex??false}
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
          <Segment className="form sidebar-image-data" >
            <TextWidget
              id="placeholder-city"
              title="Placeholder"
              value={props.data?.placeholderC??''}
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
              id="required-city"
              title="Required"
              value={props.data?.requiredCity??false}
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
          <Segment className="form sidebar-image-data" >
            <TextWidget
              id="placeholder-notes"
              title="Placeholder"
              value={props.data?.placeholderNotes??''}
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
              id="required-notes"
              title="Required"
              value={props.data?.requiredNotes??false}
              onChange={(e, v) => {
                props.onChangeBlock(props.block, {
                  ...props.data,
                  requiredNotes: v,
                });
              }}
            />
          </Segment>
        </Segment.Group>
      </SidebarPortal>
    </>
  );
};

export default MyFormEdit;
