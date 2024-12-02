import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <h1>Ayyappa</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
