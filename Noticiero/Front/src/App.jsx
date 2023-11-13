import React from 'react';
import CombinedComponent from './components/admin/UsuariosDashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import AddUser from './pages/Register';
import AddNoticia from './pages/Agregarn';
import Home from './pages/Home';
import Noticias from './components/admin/Noticias';
import Motivacional from './pages/Motivacional';
import Trafico from './pages/Trafico';
import Nosotros from './pages/Nosotros';
import Contactanos from './pages/Contactanos';
import CondicionesAtmosfericas from './pages/apigobu';
import Valores from './pages/Valores';
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
      path :"/Agregarn",
      element:<AddNoticia/>
    },
    {
      path :"/Home",
      element:<Home/>
    },

    {
      path :"/Noticias",
      element:<Noticias/>
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
    {
      path :"/Bolsa",
      element:<Valores/>
    },

  
  
    ])
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  );
}

export default App;
