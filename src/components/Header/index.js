import React, { Component } from 'react';
import logo from '../../_img/search_movie.svg';
import logoKanji from '../../_img/search_movie.svg';
import SearchBar from '../../components/SearchBar';

import './index.css';

class Header extends Component {

  constructor() {
    super()
    this.state = {
      userMenuOpen: false
    }
  }

  render () {
    return (
      <div className="App-header">
        <div className="App-logo">
          <a className="App-header-title" href="/"><img src={logo} alt="Eiga"/></a>
          <a className="App-header-title-kanji" href="/"><img src={logoKanji} alt="Eiga in Kanji"/></a>
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default Header;
