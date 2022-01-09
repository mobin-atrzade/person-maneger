import React from 'react'
import Person from './Person';

const Persons = ({ persons, personDelete }) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    firstname={person.firstname}
                    lastname={person.lastname}
                    Deleted={() => personDelete(person.id)}
                />
            ))}
        </div>
    )
}

export default Persons;