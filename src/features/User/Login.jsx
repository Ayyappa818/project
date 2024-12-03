import React from 'react'
import { Formik, Field, Form } from 'formik';
import { useLoginMutation } from '../../services/UserApi';
import { useNavigate } from 'react-router-dom';

function Login() {
  var navigate=useNavigate();
  var[LoginFn]=useLoginMutation();
  return (
    <div>
      <Formik
       initialValues={{ username: '', password: ''}}
       onSubmit={(values) => {
         console.log(values)
         LoginFn(values).then((res)=>{console.log(res)})
         navigate(`/dashboard`)
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
