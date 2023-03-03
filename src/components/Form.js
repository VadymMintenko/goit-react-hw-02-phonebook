import { Formik, Form, Field } from 'formik';

const initialsValues = {
  name: '',
};

export const AddContactsForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialsValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button>Add contact</button>
      </Form>
    </Formik>
  );
};
