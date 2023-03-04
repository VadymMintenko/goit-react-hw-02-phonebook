import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import { nanoid } from 'nanoid';
let schema = object({
  name: string().required(),
});

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
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
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={this.state}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          <Form autoComplete="off">
            <ErrorMessage name="name" component="div" />
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
        <ul>
          {this.state.contacts.map(element => {
            return (
              <li key={nanoid()}>
                <p>{element.name}:</p>
                <p>{element.number}</p>
              </li>
            );
          })}
        </ul>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
