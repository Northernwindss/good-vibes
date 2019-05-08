import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import router from '../src/router'
import store from '../src/redux/store';



function App() {
  return (
    // <div className="App">
    // </div>
    <Provider store={store}>
      <HashRouter>
        {router}
      </HashRouter>
    </Provider>

  );
}

export default App;
