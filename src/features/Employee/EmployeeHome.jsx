import React from 'react'
import { useGetEmployeeQuery } from '../../services/EmployeeApi'

function EmployeeHome() {
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
          return <div>
            <ul>
              <li>{e.firstname}</li>
              <li>{e.lastname}</li>
              <li>{e.age}</li>
              <li></li>
            </ul>
          </div>
        })
      }
    </div>
  )
}

export default EmployeeHome
