import './styles/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './views/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyProyects from './views/MyProyects/MyProyects.jsx';
import Settings from './views/Settings/Settings.jsx';
import MyStories from './views/MyStories/MyStories.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home/>
  },
  {
    path: "/home",
    element:  <Home/>
  },
  {
    path: "/my-projects",
    element:  <MyProyects/>
  },
  {
    path: "/settings",
    element:  <Settings/>
  },
  {
    path: "/my-stories",
    element:  <MyStories/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

