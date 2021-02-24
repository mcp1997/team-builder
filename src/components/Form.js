import React from 'react'

export default function Form(props) {

    const { values, update, submit } = props

    const change = e => {
        const { name, value } = e.target
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type='text'
                        name='memberName'
                        onChange={change}
                        value={values.memberName}
                        placeholder='Enter Your Name'
                        maxLength='30'
                    />
                </label>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        onChange={change}
                        value={values.email}
                        placeholder='Enter Your Email'
                        maxLength='30'
                    />
                </label>
                <label>Role
                    <select name='role' value={values.role} onChange={change}>
                        <option value=''>-- select role --</option>
                        <option value='Front-End Dev'>Front-End Dev</option>
                        <option value='Back-End Dev'>Back-End Dev</option>
                        <option value='Designer'>Designer</option>
                        <option value='Project Lead'>Project Lead</option>
                    </select>
                </label>
                <button>submit</button>
            </div>
        </form>
    )
}