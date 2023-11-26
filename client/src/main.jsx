import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'


// Import the required Provider component and createBrowserRouter helper function
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'

// Import the pages the application should be able to display
import App from './App.jsx'
import HomePage from './pages/homePage.jsx'
import ErrorPage from './pages/errorPage.jsx'
import LoginPage from './pages/loginPage.jsx'
import ProfilePage from './pages/profilePage.jsx'
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
<<<<<<< HEAD
        path: "profilePage",
        element: <ProfilePage />,
      },
      {
        path: "login",
=======
        path: "/profilePage",
        element: <ProfilePage />,
      },
      {
        path: "/login",
>>>>>>> ad96b49f5320d2129de212d17bf95bd11147cf1a
        element: <LoginPage />,
      }
    ],
  },
]);

// Render the Provider which will keep track of the application's location
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
