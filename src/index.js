import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// A simple version of the form to make sure everything is functioning correctly
const memberList = [
  { memberName: 'Matt', memberRole: 'Front-End Dev' },
  { memberName: 'Allison', memberRole: 'Back-End Dev' },
  { memberName: 'Kylo', memberRole: 'Designer' }
]

const initialFormValues = {
  memberName: '',
  memberRole: ''
}

function SimpleForm() {
  const [members, setMembers] = useState(memberList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = e => {
    e.preventDefault()
    const newMember = {
      memberName: formValues.memberName.trim(),
      memberRole: formValues.memberRole.trim()
    }
    setMembers([ ...members, newMember ])
    setFormValues(initialFormValues)
  }

  return (
    <div>
      <h1>Simple Form</h1>
      {
        members.map((mem, idx) => {
          return <div key={idx}>{mem.memberName}'s role is {mem.memberRole}</div>
        })
      }
      <form onSubmit={submit}>
        <input name='memberName' type='text' value={formValues.memberName} onChange={change} />
        <input name='memberRole' type='text' value={formValues.memberRole} onChange={change} />

        <button>submit</button>
      </form>
    </div>
  )
}

ReactDOM.render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
