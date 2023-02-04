import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Join from './components/Memberships/index.jsx'

import Shop from './components/Shop/Shop.jsx'
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Landing} />

        <Route path={'/home'} component={Home} />
        <Route path={'/join'} component={Join} />
        <Route exact path={'/shop'} component={Shop} />
        <Route exact path={'/shop/details'} component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;