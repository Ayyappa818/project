import React from 'react'
import { Formik, Field, Form } from 'formik';
import { useLoginMutation } from '../../services/UserApi';

function Login() {
  var[LoginFn]=useLoginMutation();
  return (
    <div>
      <Formik
       initialValues={{ username: '', password: ''}}
       onSubmit={(values) => {
         console.log(values)
         LoginFn(values).then((res)=>{console.log(res)})
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
