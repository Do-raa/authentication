import {useEffect} from "react"
import {useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter , Route , Switch} from "react-router-dom"
import {getAuthUser} from  "./js/action/authAction"
import AppNavBar from './components/AppNavBar';
import Home from "./components/pages/Home"
import Dashboard from "./components/pages/Dashboard"
import PrivateRoute from "./components/route/PrivateRoute";
function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser)
  useEffect(() => {
    getUser()
  },[])
  return (
  <BrowserRouter >
  <AppNavBar />
  <Switch>
    <Route exact path="/" component={Home} />
    <PrivateRoute  path="/dashboard" component={Dashboard} />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
