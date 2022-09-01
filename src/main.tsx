import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { App } from 'App'
import "styles/globals.scss"
import { AppRouter } from 'routes/AppRouter'
import { store } from './store';
import { Provider } from 'react-redux';
import { Pdf, Login, Ticket } from 'pages'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Seats } from 'components/ticket/Seats'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <Provider store={store}>
    <AppRouter />
  </Provider>

)
