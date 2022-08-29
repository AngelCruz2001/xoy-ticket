import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { App } from 'App'
import "styles/globals.scss"

import { store } from './store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
    </Provider>

)
