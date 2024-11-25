import React from 'react'
import { useGetLeadsQuery } from '../../services/LeadsApi'

function Leadmaster() {
    var{isLoading,data}=useGetLeadsQuery();
    console.log(isLoading)
    console.log(data)
  return (
    <div>
      {
        data?.map((a)=>{
            return <li>{a.name}</li>
        })
      }
    </div>
  )
}

export default Leadmaster
