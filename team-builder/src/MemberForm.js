import React from 'react'

export default function MemberForm(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const name = evt.target.name;
    const { value } = evt.target;
    // const { name, value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username
              <input
                name="username"
                type="text"
                placeholder="Type your username"
                maxLength="15"
                value={values.username}
                onChange={onChange}
              />
        </label>

        <label>Email
              <input
                name="email"
                type="email"
                placeholder="Type your email"
                value={values.email}
                onChange={onChange}
              />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
              <select value={values.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="Principal Engineer">Principal Engineer</option>
                <option value="Senior Engineer">Senior Engineer</option>
                <option value="Junior Engineer">Junior Engineer</option>
                <option value="Intern">Intern</option>
              </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}