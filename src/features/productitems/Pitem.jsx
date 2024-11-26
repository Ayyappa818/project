import React from 'react'
import { useGetpitemsQuery } from '../../services/ProductsApi'
import { useParams } from 'react-router-dom';

function Pitem() {
    var {id} =useParams();
    var{isLoading,data}=useGetpitemsQuery(id);
    console.log(isLoading)
    console.log(data)
  return (
    <div>
      <h1>Pitem</h1>
      {
        isLoading && <h3>isloading....</h3>
      }
      <div class="card mb-3" style={{maxwidth:540}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={data?.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Title :{data?.title}</h5>
        <h5 class="card-title">Description :{data?.description}</h5>
        <h5 class="card-title">Category :{data?.category}</h5>
        <b class="card-title">Rating :{data?.rating.rate}</b>
        <b class="card-title">Count :{data?.rating.count}</b>
        <p class="card-text">Price :{data?.price}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Pitem
