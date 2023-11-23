import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'


// Import the required Provider component and createBrowserRouter helper function
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'

// Import the pages the application should be able to display
import App from './App.jsx'
import HomePage from './pages/homePage.jsx'
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
      }
    ],
  },
]);

// Render the Provider which will keep track of the application's location
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
