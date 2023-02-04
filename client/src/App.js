import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Join from './components/Join'
import Shop from './components/Shop/Shop.jsx'
import Memberships from './components/Memberships'
import Login from './components/Login/Login';
import Winecards from './components/Shop/WineCard/WineCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path={'/card'} component={Winecards}/>
        <Route exact path={'/'} component={Landing} />
        <Route path={'/home'} component={Home} />
        <Route exact path={'/memberships'} component={Memberships} />
        <Route path={'/memberships/join'} component={Join} />
        <Route path={'/shop'} component={Shop} />
        <Route path={'/login'} component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;