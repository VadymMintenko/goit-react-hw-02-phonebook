import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { object, string } from 'yup';

let schema = object({
  name: string().required(),
});

export class ContactsForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.props.handleSubmit}
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
    );
  }
}
