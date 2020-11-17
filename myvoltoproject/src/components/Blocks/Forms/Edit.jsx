import React, { useState } from 'react';
import { SidebarPortal, TextWidget, TextareaWidget } from '@plone/volto/components';
import InputSidebar from './InputSidebar';
import TextAreaSidebar from './TextAreaSidebar';
import { Form,Segment  } from 'semantic-ui-react';

const FormEdit = (props) => {
const [textarea, setTextarea] = useState('Enter the lable for textarea');
  return (
    <>
      <Form>
        <TextWidget
          id="input-edit"
          title={
            props.data.input?.length > 0
              ? props.data.input
              : 'enter input label'
          }
          required={props.data.requiredI}
          value={props.data.placeholder}
          onChange={() => {}}
          wrapped
        />
        
        
	<TextareaWidget
          id="external"
          title={
            props.data.textarea?.length > 0 
            ? props.data.textarea : textarea
          }
          required={props.data.requiredT}
          value=""
          onChange={() => {}}
        />
      </Form>
      <SidebarPortal selected={props.selected}>
        <Segment>
        <InputSidebar {...props} />
        </Segment>
        <Segment>
        <TextAreaSidebar {...props} />
        </Segment>
      </SidebarPortal>
    </>
  );
};

export default FormEdit;

