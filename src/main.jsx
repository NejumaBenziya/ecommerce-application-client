import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {store} from './globalState/store'
import "./styles/global.css"
import UserLayout from './layouts/UserLayout'
import { Provider } from 'react-redux'
const router=createBrowserRouter([
  {
    path:"",
    element:<UserLayout/>,
    children:[{
  path :"/",
  element:<Homepage/>,
  children:[]
},
{
  path:"/login",
  element:<Login/>,
  children:[]
}]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  </StrictMode>
)
