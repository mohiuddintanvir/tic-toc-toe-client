import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './component/routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App ">
   <RouterProvider router={router}></RouterProvider>
   <Toaster></Toaster>
    </div>
  );
}

export default App;
