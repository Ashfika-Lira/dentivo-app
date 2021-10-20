import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Error from './components/Error/Error';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import AuthProvider from './components/Context/AuthProvider';
import Appointment from './components/Appointment/Appointment';
import Dentists from './components/Dentists/Dentists';

function App() {
  return (
    <div>
       <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute> */}
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/dentists">
              <Dentists></Dentists>
            </Route>
            <Route path="/detail/:id">
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
