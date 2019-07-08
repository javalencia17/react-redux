import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';


/* layout de la página ------------------------------------------------------ */
import Master from './components/Master/Master';

/* Rutas -------------------------------------------------------------------- */
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';


function App() {
  return (
    <Provider store={store}>
      <Router>
          <Master>
            <AppRoutes />
          </Master>
        </Router>
    </Provider>
  );
}




export default App;
