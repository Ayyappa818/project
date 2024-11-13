import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Signup() {
  return (
    <div>
      <Formik
       initialValues={{ name: '', password: '' }}
       onSubmit={(values)=>{
         console.log(values)
       }}
     >
       {(isSubmitting) => (
         <Form>
           <Field type="text" name="name" /><br />
           <ErrorMessage name="name" component="div" />
           <Field type="password" name="password" /><br />
           <ErrorMessage name="password" component="div" />
           <button type='submit'>Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Signup
