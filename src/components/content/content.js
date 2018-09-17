import React, { Component } from 'react'
import axios from 'axios'
import './content.css'
import Icon from '../icon/icon'
import Card from '../card/card'

export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            characters: [],
            input: ''
        }
        this.getValue = this.getValue.bind(this);
    }

    componentDidMount() {
        axios.get('http://gateway.marvel.com/v1/public/characters?modifiedSince=07-01-2016&limit=36&ts=1&apikey=6ef5da6e7cfa816f424d1fad780dcbfe&hash=b2ce0fa31e1c69562acb5327d563ec94')
            .then( response => {
                const characters = response.data.data.results;
                this.setState({characters});
                console.log(response);
            })
    }

    getValue(evt) {
        const inputValue = evt.target.value;
        this.setState({ input: inputValue });
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <header className="content-header">
                        <h2>{this.props.title}</h2>
                    </header>
                    <div className="content-filter">
                        <div className="content-search">
                            <input id="search" type="text" onChange={this.getValue} className={this.state.input !== '' ? 'show' : ''} />
                            <label htmlFor="search">Characters</label>
                        </div>
                        <div className="content-order">
                            <Icon iconName="filter"/>
                            <div className="content-select">
                                <select>
                                    <option value="" disabledselected>Order by</option>
                                    <option value="az">A-Z</option>
                                    <option value="za">Z-A</option>
                                </select>
                                <Icon iconName="arrow-down"/>
                            </div>
                        </div>
                    </div>
                    <div className="content-result">
                        <ul>
                            { this.state.characters.map(character => 
                                <Card
                                    image={character.thumbnail.path + '.' + character.thumbnail.extension}
                                    name={character.name}
                                    description={character.description}
                                />  
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }    
}