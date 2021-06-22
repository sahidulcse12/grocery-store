
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Home/Header/Header';
import Login from './components/Login/Login';
import AddProduct from './components/DashBoard/AddProduct/AddProduct';
import ManageProduct from "./components/DashBoard/ManageProduct/ManageProduct";
import EditProduct from "./components/DashBoard/EditProduct/EditProduct";
import Orders from "./components/Orders/Orders";
import CheckOut from "./components/CheckOut/CheckOut";
import Admin from "./components/DashBoard/Admin/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/addProduct">
          <AddProduct />
        </Route>
        <Route path="/manageProduct">
          <ManageProduct />
        </Route>
        <Route path="/editProduct">
          <EditProduct />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/checkOut/:id">
          <CheckOut />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
