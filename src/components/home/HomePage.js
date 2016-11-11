import React, {Component} from 'react';
import {Link} from 'react-router';
import Offer from './offer';
console.log(Offer)
var list = [{name:"amazon"},{name:"flip"}]
class HomePage extends Component {
    render() {
        list = [{name:"amazon"},{name:"flip"}]
        return (<div>{
            list.map(function (item, i) {
                        return (
                            <Offer name={item.name} key={"item" + i}/>
                        )
                    })
            
        }
    </div>)
    }
}

export default HomePage;