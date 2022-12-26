import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import GameForm from "../Gameform/GameForm";
import GamePage from "../Gamepage/GamePage";
import Home from "../Home/Home";
import Login from "../Login/Login";

import Main from "../main/Main";
import NewGame from "../Newgame/NewGame";
import Register from "../Register/Register";
  

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/newgame',
                element:<NewGame></NewGame>,
            },
            {
                path:'/gameform',
                element:<GameForm></GameForm>,
            },
            {
                path:'/gamepage',
                element:<GamePage></GamePage>
            },
        ]
    }
  ])
  export default router;