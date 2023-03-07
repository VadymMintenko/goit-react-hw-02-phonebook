import React from 'react';
import { ContactsList } from './ContactsList';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { Container, ContactsListSContainer } from './ContactsForm.styled';

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

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    return (
      <Container>
        <ContactsListSContainer>
          <ContactsForm handleSubmit={this.handleSubmit} />
          <ContactsList
            state={this.state}
            onDeleteContact={this.onDeleteContact}
          />
        </ContactsListSContainer>

        <Filter filter={this.state.filter} searchContact={this.searchContact} />
      </Container>
    );
  }
}
