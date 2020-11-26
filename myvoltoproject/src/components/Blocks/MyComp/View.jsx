import React, {useState} from 'react';
import { TextWidget,TextareaWidget } from '@plone/volto/components';
import { Form,Button} from 'semantic-ui-react';
import EmailWidget from '@package/components/EmailWidget/EmailWidget';
import NumberWidget from '@package/components/NumberWidget/NumberWidget';
import SelectMyWidget from '@package/components/SelectMyWidget/SelectMyWidget';



const MyFormView =({
	id,
	data,
	...rest})=>{
	const [TextN,setTextN]=useState('');
	const [TextE,setEmail]=useState('');
	const [NumA,setNumA]=useState(18);
	const [SelS,setSelS]=useState(null);
	const [TextC,setTextC]=useState('');
	const [SelR,setSelR]=useState({value:'talk-with',label:'Talk with Assistent'});
	const[TextareaNo, setTextareaNo]=useState('');
	return (
		<>
			<Form>
				<TextWidget
				id="name"
				title="Name"
				required={data?.requiredName??false}
				value={TextN}
				placeholder={data?.placeholderN?? ''}
				onChange={(id,value)=>setTextN(value)}
				/>
				<EmailWidget
				id="email"
				title="Email"
				required={data?.requiredEmail??false}
				value={TextE}
				onChange={(id,value)=>setEmail(value)}
				/>
				<NumberWidget
				id="age"
				title="Age"
				required={data?.requiredAge??false}
				value={NumA}
				onChange={(id,value)=>setNumA(value)}
				onClick={(id,value)=>setNumA(value)}
				onBlur={()=>{}}
				minimum={18}
				maximum={100}
				/>
				<SelectMyWidget
				id="sex"
				title="Sex"
				required={data?.requiredSex??false}
				value={SelS}
				choices={[
					{value:'Male', label:'Male'},
					{value:'Female', label:'Female'},
					{value:'Other', label:'Other'}
				]}
				onChange={option => setSelS(option)}
				/>
				<TextWidget
				id="city"
				title="City"
				required={data?.requiredCity??false}
				value={TextC}
				placeholder={data?.placeholderC??''}
				onChange={(id,value)=>setTextC(value)}
				/>
				<SelectMyWidget
				id="reason"
				title="Reason"
				required={true}
				value={SelR}
				choices={[
					{value:'Help',label:'Help'},
					{value:'Question',label:'Question'},
					{value:'Job-request',label:'Job Request'},
				]}
				onChange={option => setSelS(option)}
				/>
				<TextareaWidget
				id="notes"
				title="Notes"
				required={data?.requiredNotes??false}
				value={TextareaNo}
				placeholder={data?.placeholderNotes??''}
			onChange={(id,value)=>setTextareaNo(value)}
				/>
      			<div>
       		 <Button
          			primary
          			className="submit-block-button view"
          			onClick={() => props.onSubmit(props.data)}
          		>
          		SEND
        		</Button>
      			</div>
			</Form>
		</>
		
		
	);
	};
	
export default MyFormView;
