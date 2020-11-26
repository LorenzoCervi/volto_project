import React from 'react';
import {FormFieldWrapper} from '@plone/volto/components';
import loadable from '@loadable/component';

//STILE SELECT 
import {
  Option,
  DropdownIndicator,
  selectTheme,
  customSelectStyles,
} from '@plone/volto/components/manage/Widgets/SelectStyling';
//import './style.css';
import PropTypes from 'prop-types';
import Select from 'react-select';

//const Select = loadable.lib(() => import('react-select'));


const SelectMyWidget=(props)=>{
	const { 
	id,
	title,
	value,
	choices,
	required,
	onChange
	}=props;
	const inputId=`field-${id}`;
	
	return (
	
	<FormFieldWrapper {...props} className="myselect">
	  <Select
	  	id={inputId}
	  	key={props.choices}
	  	className="react-select-container"
            	classNamePrefix="react-select"
            	styles={customSelectStyles}
            	theme={selectTheme}
            	components={{ DropdownIndicator,Option }}
	  	name={id}
	  	value={value || {value:'',label:''}}
	  	options={choices}
	  	onChange={onChange}
	  />
	</FormFieldWrapper>
	);
};

SelectMyWidget.propTypes={
 id:PropTypes.string.isRequired,
 title:PropTypes.string.isRequired,
 required:PropTypes.bool,
 value:PropTypes.object,
 choices: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    ),
  onChange:PropTypes.func.isRequired,
};

SelectMyWidget.defaultProps={
};







export default SelectMyWidget;
