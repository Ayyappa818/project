import React from 'react'
import { Formik,Form,Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useAddproductsMutation } from '../../services/ProductsApi';

function AddProduct() {
    var navigate=useNavigate();
    var[AddFn]=useAddproductsMutation();
  return (
    <div class="container rounded p-2 addpro">
      <Formik initialValues={{
        id:"",
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
        rating:{
            rate:"",
            count:""
        }

    }}
      onSubmit={(values)=>{
        AddFn(values).then((res)=>{
          console.log(res)
          navigate('/product')
        })
        console.log(values)
      }}
      >
        <Form>
        <div class="form-floating mb-3 p-2 m-2">
          <Field type="text" name="id" class="form-control f" id="id" placeholder="name@example.com"></Field>
          <label for="id">id</label>
        </div>
        <div class="form-floating mb-3 p-2 m-2">
          <Field type="text" name="title" class="form-control f" id="title" placeholder="name@example.com"></Field>
          <label for="title">Title</label>
        </div>
        <div class="form-floating mb-3 p-2 m-2">
          <Field type="text" name="price" class="form-control f" id="price" placeholder="name@example.com"></Field>
          <label for="price">Price</label>
        </div>
        <div class="form-floating mb-3 p-2 m-2">
          <Field type="text" name="description"  class="form-control f" id="description" placeholder="name@example.com"></Field>
          <label for="description">Description</label>
        </div>
        <div class="form-floating mb-3 p-2 m-2">
          <Field type="text" name="category" class="form-control f" id="category" placeholder="name@example.com"></Field>
          <label for="category">Category</label>
        </div>
        <div class="form-floating mb-3 p-2 m-2">
          <Field type="text" name="image" class="form-control f" id="image" placeholder="name@example.com"></Field>
          <label for="image">Image</label>
        </div>
        <div class="form-floating mb-3 p-2 m-2">
          <Field type="text" name="rate" class="form-control f" id="rate" placeholder="name@example.com"></Field>
          <label for="rate">Rate</label>
        </div>
        <div class="form-floating mb-3 p-2 m-2">
          <Field type="text" name="count" class="form-control f" id="count" placeholder="name@example.com"></Field>
          <label for="count">Count</label>
        </div>
        <button type='submit' class="btn btn-outline-primary">ADD Product</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddProduct
