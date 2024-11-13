import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {
  return (
    <div class="wrapper">
      <div class='form-box login'>
      <Formik
       initialValues={{ name: '', password: '' }}
       onSubmit={(values)=>{
         console.log(values)
       }}
     >
       {(isSubmitting) => (
         <Form>
          <span class='icon'></span>
           <Field type="text" name="name" /><br />
           <label>Name</label>
           <ErrorMessage name="name" component="div" />
          <span class='icon'></span>
           <Field type="password" name="password" /><br />
           <label>Password</label>
           <ErrorMessage name="password" component="div" />
           <button type='submit'>Submit</button>
         </Form>
       )}
     </Formik>
      </div>
    </div>
  )
}

export default Login
