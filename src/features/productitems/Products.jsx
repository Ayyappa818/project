import React from 'react'
import { useGetproductsQuery } from '../../services/ProductsApi'

function Products() {
  var{isLoading,data}=useGetproductsQuery();
  console.log(isLoading)
  console.log(data)
  return (
    <div>
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
                <p>Rating :{pd.rating.rate}</p>
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
