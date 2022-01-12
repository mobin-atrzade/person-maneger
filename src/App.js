import React, { Component } from 'react'
import Persons from './components/Person/Persons';

export class App extends Component {
    state = {
        persons: [],
        showPersons: false,
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
        persons.push(person);
        this.setState({ persons, person: '' });
    }
    setPerson = (event) => {
        this.setState({ person: event.target.value });
    }

    render() {
        const { persons, showPersons } = this.state;

        const buttonStyle = {
            padding: "1em",
            fontFamily: "IRANSans",
            backgroundColor: "pink"
        }

        let person = null;

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
            <div style={{ textAlign: 'center' }}>
                <h2>مدیریت کننده اشخاص</h2>
                <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>
                <div>
                    <input
                        type="text"
                        placeholder='ساخت شخص جدید'
                        onChange={this.setPerson}
                        value={this.state.person}
                    />
                    <button onClick={this.handleNewPerson}>اضافه کن</button>
                </div>
                <button onClick={this.handleShowPerson} style={buttonStyle}>نمایش اشخاص</button>
                {person}
            </div>
        )
    }
}

export default App;