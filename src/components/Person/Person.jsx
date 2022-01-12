import React from 'react'
import './Person.css';

const Person = ({ fullname, deleted, changed }) => {
    return (
        <div className='person'>
            <p>{fullname}</p>
            <input type="text" placeholder={fullname} onChange={changed} />
            <button onClick={deleted}>حذف</button>
        </div>
    )
}

export default Person;