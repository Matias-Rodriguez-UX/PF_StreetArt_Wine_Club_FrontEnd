import './App.css';
import {  BrowserRouter, Route, Switch} from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
/* import Home from './components/Home/Home.jsx' */

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          {/* <Route exact path="/" component={LandingPage}/>
          <Route exact path= '/home' component={Home}/>
          <Route path='/videogame' component={VideogameCreate}/>
          <Route path='/home/:id' component={Detail}/>
          <Route path='/*' component={NotFound}/> */}
          <Route exact path="/" component={Detail}/>
        </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;