import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Join from "./components/Join";
import Shop from "./components/Shop/Shop.jsx";
import Detail from "./components/Shop/WineDetailCard/WineDetailCard.jsx";
import Cart from "./components/Shop/Cart/Cart.jsx";
import Memberships from "./components/Memberships";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/memberships" component={Memberships} />
      <Route exact path="/shop" component={Shop} />
      <Route path="/shop/:id" component={Detail} />
      <Route path="/cart" component={Cart} />
      <Route path="/userprofile" component={UserProfile} />
    </Switch>
  );
}

export default App;
