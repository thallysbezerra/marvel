import React, { Component } from 'react'
import './icon.css'

export default class Icon extends Component {
  render() {
    return (
        <span className={'icon icon-' + this.props.iconName}></span>
    );
  }
}