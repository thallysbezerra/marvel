import React, { Component } from 'react'
import Header from './components/header/header.js'
import Content from './components/content/content.js'
import Footer from './components/footer/footer.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content title="Character" />
        <Footer />
      </div>
    );
  }
}