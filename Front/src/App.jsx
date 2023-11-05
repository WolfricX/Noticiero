import React from 'react';
import CombinedComponent from './components/admin/UsuariosDashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import AddUser from './pages/Register';
import Home from './pages/Home';
import Motivacional from './pages/Motivacional';
import Trafico from './pages/Trafico';
import Nosotros from './pages/Nosotros';
import Contactanos from './pages/Contactanos';
import CondicionesAtmosfericas from './pages/apigobu';
//import LoginForm from './pages/LoginForm';


function App() {
  const router = createBrowserRouter([
  
    {
      path :"/",
      element:<CombinedComponent/>
    },
    {
      path :"/Login",
      element:<Login/>
    },
    {
      path :"/Register",
      element:<AddUser/>
    },
    {
      path :"/Home",
      element:<Home/>
    },
    {
      path :"/Motivacional",
      element:<Motivacional/>
    },
    {
      path :"/Trafico",
      element:<Trafico/>
    },
    {
      path :"/Nosotros",
      element:<Nosotros/>
    },
    {
      path :"/Contactanos",
      element:<Contactanos/>
    },
    {
      path :"/Clima",
      element:<CondicionesAtmosfericas/>
    },

  
  
    ])
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  );
}

export default App;
