import React, {Component} from 'react';
import './randomBoxes.css';

const NUM_BOXES = 32;

//stateless functional component
const Box = ({color}) => {  //destructure because we only have one prop, take color out of props object
    //return JSX
    const style = {
        width: '150px',
        height: '150px',
        backgroundColor: color //going to use a color passed in from a prop
    }
    return <div style={style}></div>
};

class RandomBoxes extends Component {
    constructor(props) {
        super(props);
        const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);// didnt want a hard coded 32 boxes
        this.state = {boxes}; // object shorthand

        setTimeout(() => {
            // const ranColor = Math.floor(
            //     Math.random() * 
            //     this.props.allColors.length
            // );
            const ranBox = Math.floor(
                Math.random() *
                this.state.boxes.length
            );
            const newState = this.state.boxes.slice()
            newState[ranBox] = this.getRandomColor();
            this.setState({newState});
        }, 300);
    }

    getRandomColor() {
        let colorIndex = Math.floor(Math.random() * this.props.allColors.length)
        return this.props.allColors[colorIndex];
    };
    
    render () {
        const boxes = this.state.boxes.map((color, index) => (
            <Box 
            key={index}
            color={color}
            />
        ));
        return (
            <div className="randomBoxes">
                {boxes}
            </div>
        );
    }

}

RandomBoxes.defaultProps = {
    allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
                "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
                "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
                "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
                "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
                "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
                "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
                "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
                "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
                "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
                "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
                "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
                "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
                "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
                "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
                "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
                "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
                "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
                "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
                "Yellow","YellowGreen"]
  };

export default RandomBoxes;