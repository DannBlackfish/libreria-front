import './App.css';
import Header from './components/Header'
import Libros from './components/Libros'
import Signup from './components/Signup'
import NuevoLibro from './components/NuevoLibro'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Header />

    <Switch>
      <Route exact path="/" component={Libros} />
      {/* <Route exact path="/:libro" component={DetalleLibro} />
      <Route exact path="/perfil" component={Perfil} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/newbook" component={NuevoLibro} />
    </Switch>

    </Router>    
    </>
  );
}

export default App;
