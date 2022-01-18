import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from './Routes'
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
       <Routes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
