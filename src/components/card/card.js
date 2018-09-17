import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {
    render() {
        const { name, image, description } = this.props;
        return (
            <li className="card">
                <img className="card-image" src={this.props.image ? this.props.image : 'https://fakeimg.pl/56x56/?text=No%20image'} alt="" />
                <div className="card-name">{this.props.name ? this.props.name : 'Unnamed'}</div>
                <div className="card-description">{this.props.description ? this.props.description : 'No description'} </div>
            </li>
        );
    }
}