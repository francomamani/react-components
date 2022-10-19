import { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    render() {
        return (
        <div className="card">
            <img src={this.props.image}/>
            <h3 className="card-title">{this.props.title}</h3>
            <div className="card-body">
                <p>{ this.props.content }</p>
            </div>
        </div>
        );
    }
}