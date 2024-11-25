import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useSignupMutation } from '../../services/LeadsApi';

function Signup() {
  var [signupFn]=useSignupMutation();
  return (
    <div class="wrapper">
      <div class='form-box login'>
        <h2>Signup</h2>
    <div>
      <Formik
       initialValues={{ username: '', password: '' }}
       onSubmit={(values)=>{
         console.log(values)
         signupFn(values).then((res)=>{
          console.log(res)
         })
       }}
     >
       {(isSubmitting) => (
         <Form>
          <div class='input-box'>
          <span class='icon'><ion-icon name="person-circle-outline"></ion-icon></span>
           <Field type="text" name="username" />
           <label>Name</label>
           <ErrorMessage name="username" component="div" />
          </div>
          <div class='input-box'>
          <span class='icon'><ion-icon name="lock-closed-outline"></ion-icon></span>
           <Field type="password" name="password" />
           <label>Password</label>
           <ErrorMessage name="password" component="div" />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
          </div>
           <button type='submit' class='btn'>SignUp</button>
           <div className="login-register">
            <p>You have an account?<Link to='/login' class='register-link'>Login</Link></p>
           </div>
         </Form>
       )}
     </Formik>
    </div>
    </div>
    </div>
  )
}

export default Signup
