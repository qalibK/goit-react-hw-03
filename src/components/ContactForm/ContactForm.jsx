import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAddContact }) {
  const handleSubmit = ({ username, number }, { resetForm }) => {
    onAddContact({
      id: Date.now(),
      name: username,
      number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {({ handleSubmit }) => (
        <Form className={css.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="username">Name</label>
          <Field name="username" id="username" className={css.input} />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
          <label htmlFor="number">Number</label>
          <Field name="number" id="number" className={css.input} />
          <ErrorMessage name="number" component="span" className={css.error} />

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
