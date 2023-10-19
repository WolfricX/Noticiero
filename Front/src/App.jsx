import React from 'react';
import CombinedComponent from './components/admin/UsuariosDashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import AddUser from './pages/Register';
import Home from './pages/Home';
import Clima from './pages/Clima';
import Motivacional from './pages/Motivacional';
import Trafico from './pages/Trafico';
import Nosotros from './pages/Nosotros';
import Contactanos from './pages/Contactanos';
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
      path :"/Clima",
      element:<Clima/>
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

  
  
    ])
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  );
}

export default App;
