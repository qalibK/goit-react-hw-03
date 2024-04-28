import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({
      id: Date.now(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          number: "",
        }}
      >
        <Form className={css.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="username">Name</label>
          <Field name="username" id="username" />
          <label htmlFor="number">Number</label>
          <Field name="number" id="number" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
