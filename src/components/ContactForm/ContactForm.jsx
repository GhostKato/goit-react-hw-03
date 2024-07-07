import React from 'react';
import s from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';

const ContactForm = ({ addContact, nameText, numberText, btnText }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form className={s.form}>
          <label className={s.label} htmlFor='username'>
            {nameText}
          </label>
          <Field
            type='text'
            className={s.input}
            id='username'
            name='name'
            value={values.name}
            onChange={handleChange}
            required
          />
          <label className={s.label} htmlFor='usernumber'>
            {numberText}
          </label>
          <Field
            type='text'
            className={s.input}
            id='usernumber'
            name='number'
            value={values.number}
            onChange={handleChange}
            required
          />
          <button type='submit' className={s.btn}>
            {btnText}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
