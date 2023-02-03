import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Join from './components/Join'
import Shop from './components/Shop'
import Memberships from './components/Memberships'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Landing} />
        <Route path={'/home'} component={Home} />
        <Route exact path={'/memberships'} component={Memberships} />
        <Route path={'memberships/join'} component={Join} />
        <Route path={'/shop'} component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;