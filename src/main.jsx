import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"

// Components
import App from './App.jsx'

// css
import './index.css'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogPage from './pages/BlogPage.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/",
        children: [
          {
            path: ":blogId",
            element: <BlogPage />
          }
        ]
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
