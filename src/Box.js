import React, {Component} from 'react';

class Box extends Component {
    render () {
        const {color, num} = this.props
        return (
        <div className="Box" style={{backgroundColor: `${color}` , height:"100px", width:"100px", margin: "1px"}}>Box #{num + 1}</div>
        )
    }
}

export default Box;