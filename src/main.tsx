import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home'
import { Provider } from 'react-redux'
import {store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import UnavailablePage from './components/pages/AnavailablePages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <UnavailablePage/>
  },
  {
    path: "/work",
    element: <UnavailablePage/>
  },
  {
    path: "/services",
    element: <UnavailablePage/>
  },
  {
    path: "/careers",
    element: <UnavailablePage/>
  },
  {
    path: "/contact",
    element: <UnavailablePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <App>
          <RouterProvider router={router}/>
        </App>
      </PersistGate>
    </Provider>
)
