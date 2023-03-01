import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Shop from "./components/Shop/Shop.jsx";
import Detail from "./components/Shop/WineDetailCard/WineDetailCard.jsx";
import Memberships from "./components/Memberships";
import UserProfile from "./components/UserProfile/UserProfile";
import AdminProfile from "./components/Admin/AdminProfile";
import PrivateRoute from "./Helpers/PrivateRoutes";
import EditUserProfileCard from './components/UserProfile/EditUserProfileCard/EditUserProfileCard';
import AlertPage from "./Helpers/AlertPage";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "./components/Shop/Cart/Cart";
import Payment from "./components/Shop/Payment/Payment"
import Unsubcribed from "./components/Home/unsubscribedNewsletter/unsubscribed";
import PaymentMembership from "./components/Shop/Payment/PaymentMembership";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route path={"/home"} component={Home} />
        <Route path={"/memberships"} component={Memberships} />
        <Route exact path={"/shop"} component={Shop} />
        <Route path={"/shop/:id"} component={Detail} />
        <Route path={"/userprofile"} component={UserProfile} />
        <Route path={"/cart"} component={Cart} />
        <Route path={"/payment"} component={Payment} />
        <Route path={"/paymentMemberships"} component={PaymentMembership} />
        <Route exact path={"/alertPage"} component={AlertPage} />
        <Route exact path={"/unsubscription"} component={Unsubcribed} />
        <PrivateRoute exact path={"/admin"} component={AdminProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
