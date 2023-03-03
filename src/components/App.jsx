import React from 'react';
import { AddContactsForm } from './Form';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <AddContactsForm />
      </div>
    );
  }
}
