import React from 'react'
import { useGetEmployeeQuery } from '../../services/EmployeeApi'
import { Link, useParams } from 'react-router-dom';

function EmployeeHome() {
  var {id}=useParams();
  var{isLoading,data}=useGetEmployeeQuery();
  console.log(isLoading)
  console.log(data)
  return (
    <div>
      <h1>Employee</h1>
      {
        isLoading && <b>Loading...</b>
      }
      {
        !isLoading && data?.map((e,i)=>{
          return <ul>
              <li>{e.firstname}</li>
              <li>{e.lastname}</li>
              <li>{e.age}</li>
              <li><Link to={`/emp/empdet/${e.id}`}>More</Link></li>
            </ul>
        })
      }
    </div>
  )
}

export default EmployeeHome
