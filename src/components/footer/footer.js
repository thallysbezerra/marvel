import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-empty"></div>
        <div className="footer-notes">
          <a href="http://marvel.com" target="_blank">Data provided by Marvel. © 2018 MARVEL</a>
        </div>
      </footer>
    );
  }
}