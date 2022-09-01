import React from 'react';
import ReactDOM from 'react-dom/client';
import "styles/globals.scss";
import { AppRouter } from 'routes/AppRouter';
import { store } from './store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}>
    <AppRouter />
  </Provider>);
//# sourceMappingURL=main.jsx.map