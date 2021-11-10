import { Switch, Route } from 'react-router';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Favorites from './Pages/Favorites';
import AlbumDetail from './Pages/AlbumDetail';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ AlbumDetail } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
      </Switch>
    </div>
  );
}

export default App;
