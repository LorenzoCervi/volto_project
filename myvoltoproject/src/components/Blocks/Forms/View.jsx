import React, { useState } from 'react';
import { TextWidget } from '@plone/volto/components';
import { TextareaWidget } from '@plone/volto/components';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFormbuilderInputValue } from '../../../actions';

const FormView = ({
  data,
  formbuilder,
  id,
  path,
  setFormbuilderInputValue,
  block,
  
  ...rest
}) => {
  const blockid = id;
    const [textarea, setTextarea] = useState('');
  const onChange = (id, value) => {
    //props.onChange(props.data.textarea, value);
    setTextarea(value);
  };

  return (
    <Form>
      <TextWidget
        id="input-form-view"
        title={data.input?.length > 0 ? data.input : 'This right space is a input field'}
        required={data.requiredI}
        value={formbuilder[path]?.[blockid] || ''}
        onChange={(id, value) => setFormbuilderInputValue(path, blockid, value)}
      />


      <TextareaWidget
        id="external"
        title={data.textarea?.length > 0 ? data.textarea:'This right space is a textarea'}
        required={data.requiredT}
        value={textarea}
        onChange={onChange}
      />
    </Form>
  );
};

export default connect(
  (state, props) => {
    return {
      formbuilder: state.formbuilder,
    };
  },
  {
    setFormbuilderInputValue,
  },
)(FormView);
