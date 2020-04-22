import React, {Component} from 'react';

class Box extends Component {
    render () {
        const {color} = this.props
        return (
        <div className="Box" style={{backgroundColor: `${color}` , height:"100px", width:"100px"}}>Ima box</div>
        )
    }
}

export default Box;