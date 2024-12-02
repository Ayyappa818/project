import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signup() {
  return (
    <div>
      <Formik
       initialValues={{ username: '', password: ''}}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(12, 'Must be 12 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       })}
       onSubmit={(values) => {
         console.log(values)
       }}
     >
       <Form>
         <label htmlFor="username">Username</label>
         <Field name="username" type="text" />
         <ErrorMessage name="username" />
          <br />
         <label htmlFor="password">Password</label>
         <Field name="password" type="text" />
         <ErrorMessage name="password" />
          <br />
         <button type="submit">Signup</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Signup
