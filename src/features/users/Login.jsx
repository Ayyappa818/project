import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div class="wrapper">
      <div class='form-box login'>
        <h2>Login</h2>
      <Formik
       initialValues={{ name: '', password: '' }}
       onSubmit={(values)=>{
         console.log(values)
       }}
     >
       {(isSubmitting) => (
         <Form>
          <div class='input-box'>
          <span class='icon'><ion-icon name="person-circle-outline"></ion-icon></span>
           <Field type="text" name="name" />
           <label>Name</label>
           <ErrorMessage name="name" component="div" />
          </div>
          <div class='input-box'>
          <span class='icon'><ion-icon name="lock-closed-outline"></ion-icon></span>
           <Field type="password" name="password" />
           <label>Password</label>
           <ErrorMessage name="password" component="div" />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <Link to='/signup'>SignUp</Link>
          </div>
           <button type='submit' class='btn'>Login</button>
           <div className="login-register">
            <p>Don't have an account?<Link to='/signup' class='register-link'>Register</Link></p>
           </div>
         </Form>
       )}
     </Formik>
      </div>
    </div>
  )
}

export default Login
