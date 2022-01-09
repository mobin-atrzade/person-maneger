import React from 'react'

const Person = ({ firstname, lastname, Deleted }) => {
    return (
        <div onClick={Deleted} style={{ cursor: "pointer" }}>
            <p>{`${firstname} ${lastname}`}</p>
        </div>
    )
}

export default Person;