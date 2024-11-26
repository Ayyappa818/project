import React from 'react'
import { useDelproductsMutation, useGetproductsQuery, useLazyGetproductsQuery } from '../../services/ProductsApi'
import { useParams } from 'react-router-dom';

function Products() {
  var {id}=useParams();
  var[getprodFn]=useLazyGetproductsQuery();
  var[delFn]=useDelproductsMutation(id);
  var{isLoading,data}=useGetproductsQuery();

  console.log(isLoading)
  console.log(data)
  function delProduct(id){
    delFn(id);
    getprodFn();
  }
  return (
    <div class="container">
      {
        isLoading && <h1>isLoading....</h1>
      }
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {
          !isLoading && data?.map((pd,i)=>{
            return <div class="col">
            <div class="card h-100">
              <img src={pd.image} class="card-img-top w-50"/>
              <div class="card-body">
                <h5 class="card-title">Title :<a href={`/product/pitem/${pd.id}`}>{pd.title}</a> </h5>
                <h4 class="card-text">Price :{pd.price}</h4>
                <h5 class="card-text">Category :{pd.category}</h5>
                <button class="btn btn-danger" onClick={()=>{delProduct(pd.id)}}>Del</button>
              </div>
            </div>
          </div>
          })
        }
      </div>
    </div>
  )
}

export default Products
