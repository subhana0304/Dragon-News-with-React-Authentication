import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home/Home';
import Category from './Components/Home/Category/Category';
import News from './Components/LayOut/News';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import AuthProvider from './Components/Provider/AuthProvider';
import LoginLayout from './Components/LoginLayout/LoginLayout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Terms from './Components/Terms/Terms';
import About from './Components/About/About';
import Career from './Components/Career/Career';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/career',
        element: <Career></Career>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ':id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-silk-nu.vercel.app/categories/${params.id}`)
      }
    ]
  },
  {
    path: 'news',
    element: <News></News>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-silk-nu.vercel.app/news/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
