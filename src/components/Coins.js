import React,{ Component } from 'react'

class Box extends Component{
constructor(props){

	super(props)
	this.handleChangeColor = this.handleChangeColor.bind(this)
}

// Handler callback
handleChangeColor(e){
	this.props.changeColor(this.props.rowIndex,parseInt(e.target.style.columnIndex))
    console.log(this.props.rowIndex)
}

render(){
	// Create a div component and assign the given
	// color value by BoxContainer component as its
	// background color
    let colors = this.props.rowColors;
	return (
        <>
        {colors.map((color,columnIndex) => (
            
                <td key={columnIndex} columnIndex={columnIndex}  onMouseOver={this.handleChangeColor}
                style={{backgroundColor:color, columnIndex:columnIndex}}>
                </td>
        ))}
     </>   
    )
}
}

export default Box
