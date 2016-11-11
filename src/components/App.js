import React, {PropTypes} from 'react';
import Header from './commons/header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <hr />
                { this.props.children }
            </div>
        );
    }

}
App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;