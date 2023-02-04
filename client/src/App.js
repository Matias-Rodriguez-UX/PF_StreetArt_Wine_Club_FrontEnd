import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Landing from './components/Landing'; */
import Join from './components/Join'
import Shop from './components/Shop/Shop.jsx'
import Detail from './components/Shop/WineDetailCard/WineDetailCard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Detail} />
        <Route path={'/home'} component={Home} />
        <Route path={'/join'} component={Join} />
        <Route path={'/shop'} component={Shop} />
        <Route path={'/shop/:id'} component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;