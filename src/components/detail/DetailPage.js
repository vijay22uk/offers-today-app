import React, {Component} from 'react';
import {Link} from 'react-router';

class DetailPage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>{this.props.params.name} </h1>
                <p>
                <Link to="/" 
                className="btn btn-primary btn-lg">
                Back
                </Link>
                </p>
            </div>
        );
    }
}

export default DetailPage;