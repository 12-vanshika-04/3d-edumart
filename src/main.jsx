import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import ReactDOM from 'react-dom/client'
import UserContext from './context/UserContext.jsx'
import { AllRoutes } from './components/AllModels.jsx'
import 'boxicons/css/boxicons.min.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      
        {AllRoutes}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>



)

