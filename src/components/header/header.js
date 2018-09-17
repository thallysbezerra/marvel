import React, { Component } from 'react'
import logo from './img/1200px-MarvelLogo.svg.png'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <img src={logo} alt="Marvel" className="logo"/>
        </div>
      </header>
    );
  }
}