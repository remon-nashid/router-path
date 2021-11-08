import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const About = () => (<h3>About</h3>)
const Users = () => (<h3>Users</h3>)
const Home = () => (<h3>Home</h3>)
const UserPage = () => {
  let { id } = useParams<{id: string}>();
  
  return (<div>
    <h3>User {id}</h3>
  </div>)
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
