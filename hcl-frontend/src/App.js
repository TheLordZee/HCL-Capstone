import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from './Routes'
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store"
import { SET_CURRENT_USER } from './actions/types';
import jwt_decode from "jwt-decode";
import {setAuthHeader} from './helpers/securityUtils';

const jwtToken = localStorage.getItem("jwtToken")

if(jwtToken){
    setAuthHeader(jwtToken);
    const decoded = jwt_decode(jwtToken);
    store.dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    })

    const currTime = Date.now()/1000
    if(decoded.exp < currTime){
      //window.location.href="/"
    }
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
         <Routes/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
