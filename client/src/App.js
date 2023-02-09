import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Join from './components/Join'
import Shop from './components/Shop/Shop.jsx'
import Detail from './components/Shop/WineDetailCard/WineDetailCard.jsx';
import Memberships from './components/Memberships';
import UserProfile from './components/UserProfile/UserProfile';
import HomeAdmin from './components/Admin/Home';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Landing} />
        <Route path={'/home'} component={Home} />
        <Route path={'/memberships'} component={Memberships} />
        <Route exact path={'/shop'} component={Shop} />
        <Route path={'/shop/:id'} component={Detail} />
        <Route path={'/userprofile'} component={UserProfile} />
        <Route path={'/admin/home'} component={HomeAdmin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;