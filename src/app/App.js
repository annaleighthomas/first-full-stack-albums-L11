import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import AlbumPage from '../albums/AlbumPage';
import AlbumDetailPage from '../album/AlbumDetailPage';
import AlbumAddPage from '../add-page/AlbumAddPage';
import AlbumEditPage from '../edit-page/AlbumEditPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/albums" exact={true}
                render={routerProps => (
                  <AlbumPage {...routerProps}/>
                )}
              />

              <Route path="/albums/add"
                render={routerProps => (
                  <AlbumAddPage {...routerProps}/>
                )}
              />

              <Route path="/albums/:id" exact={true}
                render={routerProps => (
                  <AlbumDetailPage {...routerProps}/>
                )}
              />

              <Route path="/albums/:id/edit" exact={true}
                render={routeProps => (
                  <AlbumEditPage {...routeProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
