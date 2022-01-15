import React, { Component } from 'react'
import Persons from './components/Person/Persons';
import { BsFillPlusSquareFill } from "react-icons/bs";


export class App extends Component {

    state = {
        persons: [],
        showPersons: true,
        person: ''
    }

    handleShowPerson = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    handleDeletePerson = (id) => {
        //filter
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p => p.id !== id);
        this.setState({ persons: filteredPersons });
    }

    handleNameChange = (event, id) => {
        const { persons: allPersons } = this.state;

        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];
        this.setState({ persons });
    }

    handleNewPerson = () => {
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname: this.state.person
        }
        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            this.setState({ persons, person: '' });
        }
    }

    setPerson = (event) => {
        this.setState({ person: event.target.value });
    }

    render() {
        const { persons, showPersons } = this.state;

        let person = null;
        let badgeStyle = [];

        if (persons.length >= 3) badgeStyle.push('badge-success')
        if (persons.length <= 2) badgeStyle.push('badge-warning')
        if (persons.length <= 1) badgeStyle.push('badge-danger')

        if (showPersons) {
            person = (
                <Persons
                    persons={persons}
                    personDelete={this.handleDeletePerson}
                    personChange={this.handleNameChange}
                />
            )
        }
        return (
            <div className="rtl text-center">
                <div className="alert alert-info">
                    <h2>مدیریت کننده اشخاص</h2>
                </div>
                <h5 className="alert alert-light">
                    تعداد اشخاص <span className={`badge badge-pill ${badgeStyle.join(' ')}`}>{persons.length}</span> نفر می باشد
                </h5>
                <div className='m-2 p-2'>
                    <form
                        className='form-inline justify-content-center'
                        onSubmit={event => event.preventDefault()}
                    >
                        <div className='input-group w-25'>
                            <input
                                type="text"
                                placeholder='اسم بهم بده'
                                className='form-control'
                                onChange={this.setPerson}
                                value={this.state.person}
                            />
                            <div className='input-group-prepend'>
                                <button
                                    type='submit'
                                    className="btn btn-sm btn-success"
                                    onClick={this.handleNewPerson}
                                >
                                    <BsFillPlusSquareFill />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <button
                    onClick={this.handleShowPerson}
                    className={showPersons ? "btn btn-info" : "btn btn-danger"}>
                    نمایش اشخاص
                </button>
                {person}
            </div >
        )
    }
}

export default App;