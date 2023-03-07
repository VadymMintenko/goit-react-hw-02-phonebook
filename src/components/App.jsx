import React from 'react';
import { ContactsList } from './ContactsList';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    resetForm();
  };

  searchContact = evt => {
    this.setState({ filter: evt.target.value.toLowerCase() });
  };

  render() {
    return (
      <div>
        <ContactsForm handleSubmit={this.handleSubmit} />
        <Filter filter={this.state.filter} searchContact={this.searchContact} />
        <ContactsList state={this.state} />
      </div>
    );
  }
}
