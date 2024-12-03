import React from 'react'
import { Formik, Field, Form } from 'formik';
import { useSignupMutation } from '../../services/UserApi';

function Signup() {
  var[SignupFn]=useSignupMutation();
  return (
    <div>
      <Formik
       initialValues={{ username: '', password: ''}}
       onSubmit={(values) => {
         console.log(values)
         SignupFn(values).then((res)=>{console.log(res)})
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
