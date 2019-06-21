import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PATH_POPULAR, PATH_TOP_RATED, PATH_UPCOMING } from './api';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Discover from './components/Discover';
import SearchResults from './components/SearchResults';
import Movie from './components/Movie';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: {},
      watchLater: {},
      ...this.defaulFilterstState
    };
  }

  defaulFilterstState = {
    filters: {
      Clasificación: {
        min: 5,
        max: 10
      },
      runtime: {
        min: 45,
        max: 250
      },
      sort_by: {
        value: 'vote_average',
        label: 'Clasificación'
      },
      order: {
        value: 'desc',
        label: 'Descendiente'
      },
      year: new Date().getFullYear()
    }
  }

  updateStateWithFilters = (filters) => this.setState({ filters })

  resetFilters = () => this.setState(this.defaultState)

  componentDidMount = () => {
    this._notificationSystem = this.refs.notificationSystem;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="App-main">
            <div className="App-sidebar-wrapper">
              <Sidebar
                filters={this.state.filters}
                updateFilters={this.updateStateWithFilters}
                resetFilters={this.resetFilters}
              />
              <Footer />
            </div>
            <div className="App-content-wrapper">
              <Route exact path="/"
                render={()=><Discover
                  title="Descubrir"
                  updateFilters={this.updateStateWithFilters}
                  filters={this.state.filters}
                  authenticated={this.state.authenticated}
                  favorites={this.state.favorites}
                  watchLater={this.state.watchLater} />}
              />

              <Route exact path="/popular"
                render={()=><Main
                  title="Popular"
                  section={PATH_POPULAR}
                  authenticated={this.state.authenticated}
                  favorites={this.state.favorites}
                  watchLater={this.state.watchLater} />}
              />

              <Route exact path="/top-rated"
                render={()=><Main
                  title="Lo más visto"
                  section={PATH_TOP_RATED}
                  authenticated={this.state.authenticated}
                  favorites={this.state.favorites}
                  watchLater={this.state.watchLater}  />}
              />

              <Route exact path="/coming-soon"
                render={()=><Main
                  title="Próximamente"
                  section={PATH_UPCOMING}
                  authenticated={this.state.authenticated}
                  favorites={this.state.favorites}
                  watchLater={this.state.watchLater}  />}
              />
              
              <Route path="/search" 
              component={SearchResults}/>

              <Route path="/movie/:id-:title"
                render={props => (
                  <Movie {...props}
                    id={props.match.params.id}
                    authenticated={this.state.authenticated}
                    favorites={this.state.favorites}
                    watchLater={this.state.watchLater} />)}
              />

              <Route exact path="/favorites"
                  title="Favoritos"
                  authenticated={this.state.authenticated}
                  favorites={this.state.favorites}
                  watchLater={this.state.watchLater}
              />

              <Route exact path="/watch-later"
                  title="Ver después"
                  authenticated={this.state.authenticated}
                  favorites={this.state.favorites}
                  watchLater={this.state.watchLater}
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
