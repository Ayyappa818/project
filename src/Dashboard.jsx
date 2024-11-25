import React from 'react'
import { useNavigate } from 'react-router-dom';
import Leadmaster from './features/leads/Leadmaster';

function Dashboard() {
  var navigate=useNavigate();
  function logout(){
    window.localStorage.clear();
    navigate("/")
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={()=>{logout()}}>Logout</button>
      <Leadmaster></Leadmaster>
    </div>
  )
}

export default Dashboard
