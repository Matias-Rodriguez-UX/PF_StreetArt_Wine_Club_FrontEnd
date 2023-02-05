import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Join from './components/Join'

/* import Shop from './components/Shop' */
import WineDetailCard from './components/Shop/WineDetailCard/WineDetailCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      {/*  <Route exact path={'/'} component={Detail} /> */}

        <Route path={'/home'} component={Home} />
        <Route path={'/join'} component={Join} />
        {/* <Route path={'/shop'} component={Shop} /> */}
        <Route path={'/shop/:id'} component={WineDetailCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;