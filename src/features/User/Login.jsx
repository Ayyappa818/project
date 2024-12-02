import React from 'react'
import { Formik, Field, Form } from 'formik';

function Login() {
  return (
    <div>
      <Formik
       initialValues={{ username: '', password: ''}}
       onSubmit={(values) => {
         console.log(values)
       }}
     >
       <Form>
         <Field name="username" type="text" />
         <br />
         <Field name="password" type="text" />
         <br />
         <button type="submit">Login</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Login
