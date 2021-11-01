import { Switch, Route } from 'react-router';
import Login from './Pages/Login';
import Search from './Pages/Search';
import AlbumDetail from './Pages/AlbumDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ AlbumDetail } />
      </Switch>
    </div>
  );
}

export default App;
