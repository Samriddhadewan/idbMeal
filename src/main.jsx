import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
    element: <Home />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
