import React from 'react'

const Person = ({ firstname, lastname, personDelete }) => {
    return (
        <div onClick={personDelete}>
            <p>{`${firstname} ${lastname}`}</p>
        </div>
    )
}

export default Person;