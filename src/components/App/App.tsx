import { Formik, Form, Field, type FormikHelpers } from "formik";

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

export const App = () => {
  const handleSubmit = (values: FormValues,formikHelpers: FormikHelpers<FormValues>) => {
    console.log(values)
    formikHelpers.resetForm()
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name: <Field type="text" name="name" />
        </label>
        <label>
          Birth Date: <Field type="date" name="birthDate" />
        </label>
        <label>
          Number: <Field type="text" name="number" />
        </label>
        <label>
          Email: <Field type="email" name="email" />
        </label>
        <label>
          City: <Field type="text" name="city" />
        </label>
        <label>
          Job: <Field type="text" name="job" />
        </label>
        <fieldset>
          <legend>Has contact a job? </legend>
          <label>
            <Field type="radio" value="yes" name="hasJob" /> Yes
          </label>
          <label>
            <Field type="radio" value="no" name="hasJob" /> No
          </label>
        </fieldset>
        <Field as="select" name="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
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
        </fieldset>
        <label>
          <Field as="textarea" name="description"></Field>
        </label>
        <button>Save</button>
      </Form>
    </Formik>
  );
};
