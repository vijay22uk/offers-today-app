import React, {PropTypes} from 'react';
import {Link} from 'react-router';
const  Offer = ({name})=> {
    return(<div className="jumbotron">
                <h1>{name}</h1>
                <p>
                <Link to={"detail/"+ name} 
                className="btn btn-primary btn-lg">
                More
                </Link>
                </p>
            </div>);
}

export default Offer;

