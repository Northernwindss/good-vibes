import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import router from '../src/router'
import store from '../src/redux/store';
import Nav from './Components/NavComponents/navBar';
// import Home from './Components/NavComponents/home'
// import Contact from './Components/NavComponents/contact'



function App() {
  return (
    // <div className="App">
    // </div>
    <Provider store={store}>
      <HashRouter>
        <Nav></Nav>
        {router}
      </HashRouter>
    </Provider>

  );
}

export default App;
