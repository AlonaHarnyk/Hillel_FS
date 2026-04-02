import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as yup from "yup";
import css from "./App.module.css";

type HobbiesValues =
  | "hiking"
  | "travelling"
  | "sport"
  | "singing"
  | "skyDiving"
  | "dancing"
  | "fishing";

interface FormValues {
  name: string;
  number: string;
  email: string;
  city: string;
  job: string;
  birthDate: Date;
  hasJob: "yes" | "no";
  sex: "male" | "female";
  description: string;
  hobbies: HobbiesValues[];
}

const initialValues: FormValues = {
  name: "",
  number: "",
  email: "",
  city: "",
  job: "",
  hasJob: "yes",
  sex: "male",
  description: "",
  hobbies: [],
  birthDate: new Date(),
};

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name of contact should contain al least 2 symbols")
    .max(100, "Name of contact should not contain more than 100 symbols")
    .required("Name is required for contact :)"),
  number: yup.string().min(3).max(30).required(),
  email: yup.string().email().required(),
  city: yup.string(),
  job: yup.string(),
  hasJob: yup.string().oneOf(["yes", "no"]).required(),
  sex: yup.string().oneOf(["male", "female"]).required(),
  description: yup.string().max(500),
  hobbies: yup
    .array()
    .of(
      yup
        .string()
        .oneOf([
          "hiking",
          "travelling",
          "sport",
          "singing",
          "skyDiving",
          "dancing",
          "fishing",
        ]),
    ),
  birthDate: yup
    .date()
    .min(new Date(1900, 0, 1))
    .required(),
});

export const App = () => {
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    console.log(values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      {({ errors }) => {
        console.log(errors);
        return (
          <Form>
            <label>
              Name: <Field type="text" name="name" />{" "}
              <ErrorMessage name="name" className={css.error} component="p" />
            </label>
            <label>
              Birth Date: <Field type="date" name="birthDate" />
              <ErrorMessage name="date" className={css.error} component="p" />
            </label>
            <label>
              Number: <Field type="text" name="number" />
              <ErrorMessage name="number" className={css.error} component="p" />
            </label>
            <label>
              Email: <Field type="email" name="email" />
              <ErrorMessage name="email" className={css.error} component="p" />
            </label>
            <label>
              City: <Field type="text" name="city" />
              <ErrorMessage name="city" className={css.error} component="p" />
            </label>
            <label>
              Job: <Field type="text" name="job" />
              <ErrorMessage name="job" className={css.error} component="p" />
            </label>
            <fieldset>
              <legend>Has contact a job? </legend>
              <label>
                <Field type="radio" value="yes" name="hasJob" /> Yes
              </label>
              <label>
                <Field type="radio" value="no" name="hasJob" /> No
              </label>
              <ErrorMessage name="hasJob" className={css.error} component="p" />
            </fieldset>
            <Field as="select" name="sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <ErrorMessage name="sex" className={css.error} component="p" />
            <fieldset>
              <legend>Hobbies</legend>
              <label>
                <Field type="checkbox" value="hiking" name="hobbies" />
                Hiking
              </label>
              <label>
                <Field type="checkbox" value="travelling" name="hobbies" />
                Travelling
              </label>
              <label>
                <Field type="checkbox" value="sport" name="hobbies" />
                Sport
              </label>
              <label>
                <Field type="checkbox" value="singing" name="hobbies" />
                Singing
              </label>
              <label>
                <Field type="checkbox" value="skyDiving" name="hobbies" />
                Skydiving
              </label>
              <label>
                <Field type="checkbox" value="dancing" name="hobbies" />
                Dancing
              </label>
              <label>
                <Field type="checkbox" value="fishing" name="hobbies" />
                Fishing
              </label>
              <ErrorMessage
                name="hobbies"
                className={css.error}
                component="p"
              />
            </fieldset>
            <label>
              <Field as="textarea" name="description"></Field>
              <ErrorMessage
                name="description"
                className={css.error}
                component="p"
              />
            </label>
            <button>Save</button>
          </Form>
        );
      }}
    </Formik>
  );
};
