import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Henry PF</h1>
      </div>
      <Switch>
        <Route path={'/home'} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;