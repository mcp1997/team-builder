import React, { useState } from 'react'
import './App.css';

import { memberData } from './components/Data'
import Form from './components/Form'
import Member from './components/Member'

const initialFormValues = {
  memberName: '',
  email: '',
  role: ''
}

function App() {

  const [members, setMembers] = useState(memberData)
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if(!newMember.memberName || !newMember.email || !newMember.role){
      return
    }
    setMembers([ newMember, ...members ])
    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      <h1>Form App</h1>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map((mem, index) => {
          return (
            <Member key={index} details={mem} />
          )
        })
      }
    </div>
  );
}

export default App;
