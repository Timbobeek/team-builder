import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react'
import axios from './axios'
import Member from './Member'
import MemberForm from './MemberForm';

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}




function App() {
  const [members, setMembers] = useState([]) 

 
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  // callback to update "current member" -- formValues
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  // callback for "submit"
  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.username || !newMember.email || !newMember.role) {
      setError("All fields are required!");
    } else {
      axios.post("fakeapi.com", newMember)
        .then(res => {
          const memberFromServer = res.data;
          setMembers([ memberFromServer, ...members ]);
          setFormValues(initialFormValues);
        }).catch(err => console.error(err))
        .finally(() => setError(""))
    }
  }

  // initial state
  useEffect(() => {
    axios.get('fakeapi.com')
      .then(res => setMembers(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>
      <h2>{error}</h2>
      <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  )
}


export default App;
