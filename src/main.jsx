import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import App from "./App.jsx"

const router = createBrowserRouter([
  {
    path: "/space-tourism",
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
