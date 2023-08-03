import { Component } from 'react';

import { ContactForm } from './Form/form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


  handleAddContact = contact => {
    const { contacts } = this.state;
    const { name } = contact;


    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });

  };

  shouldComponentUpdate(nextProps, nextState) {
    const { contacts } = nextState;
    const formatedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', formatedContacts);
    return true;
  }

  componentDidMount() {
    // if (localStorage.getItem('contacts') !== null) {
    //   this.setState(prevState => {
    //   return { contacts: JSON.parse(localStorage.getItem('contacts')) };
    // });
    // }
    const getContacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (getContacts) {
      this.setState({
        contacts: getContacts,
      });
    }
}

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };


  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} filter={this.state.filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
