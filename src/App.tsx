import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const About = () => (<h3>About</h3>)
const Users = () => (<h3>Users</h3>)
const Home = () => (
<div>
  <h3>Home</h3>
  <Link to='/users/1'>User 1</Link>
</div>
)
const UserPage = () => {
  let { id } = useParams<{id: string}>();
  
  return (<div>
    <h3>User {id}</h3>
  </div>)
}

console.log(process.env)

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
