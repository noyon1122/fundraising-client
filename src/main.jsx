
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
