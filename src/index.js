import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "./Index.css"
import {Provider} from "react-redux";
import store from "./redux/store"


localStorage.setItem('reduxStore' , JSON.stringify({"mode":"light"}));


store.subscribe(() => {
  localStorage.setItem('reduxStore' , JSON.stringify(store.getState()));
  // console.log(store.getState().login.data.token)
})

ReactDOM.render(
<Provider store={store}>

  <BrowserRouter>
      <App />
    </BrowserRouter>

</Provider>

,
  document.getElementById('root')
);
