import React from 'react'
import { Formik, Field, Form } from 'formik';

function Signup() {
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
         <button type="submit">Signup</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Signup
