import './App.css';
import Winecards from "./components/Wine-cards";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  
    return (
      <BrowserRouter>
      <Switch>
      <div className="App">
      <Route path="/" components={Winecards} />
        <h1>Henry PF</h1>
      </div>
      </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;