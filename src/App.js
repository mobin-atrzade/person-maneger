import React, { Component } from 'react'
import Persons from './components/Person/Persons';

export class App extends Component {
    state = {
        persons: [
            { id: 1, firstname: "مبین", lastname: "عطرزاده" },
            { id: 2, firstname: "رضا", lastname: "دیو بند" },
            { id: 3, firstname: "امیر", lastname: "علی زاده" },
        ],
        showPersons: false
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
    render() {
        const { persons, showPersons } = this.state;
        const buttonStyle = {
            padding: "1em",
            fontFamily: "IRANSans",
            backgroundColor: "pink"
        }

        let person = null;

        if (showPersons) {
            person = <Persons persons={persons} personDelete={this.handleDeletePerson} />
        }
        return (
            <div style={{ textAlign: 'center' }}>
                <h2>مدیریت کننده اشخاص</h2>
                <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>
                {person}
                <button onClick={this.handleShowPerson} style={buttonStyle}>نمایش اشخاص</button>
            </div>
        )
    }
}
export default App;