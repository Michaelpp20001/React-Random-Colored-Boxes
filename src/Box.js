import React, {Component} from 'react';
import './Box.css';

class Box extends Component {

    render () {
        return (
            <div className="box" style={{backgroundColor: "blue"}}>I'm a box!</div>
        );
    }

};

export default Box