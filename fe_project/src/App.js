
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './page/LoginPage'
import RegisterPage from './page/registerPage'
function App() {
  return (
  
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
       
      </Switch>
    </Router>
 
  );
}

export default App;
