import React,{ Component } from 'react'
import './BoxContainer.css'
import Box from './Coins'
import { rgbValue, generateColors } from './helper'

class BoxContainer extends Component{

// Number of color boxes want shows by default
constructor(props){
	super(props)
	this.state = {
	colors :[],
    display:'block',
    numRows:'',
    regexp:/^[0-9\b]+$/
	}
	this.changeColor = this.changeColor.bind(this)
    this.reset = this.reset.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.clear = this.clear.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)

}

hideModal (e) {
    e.preventDefault();
    
    

    let numRows = parseInt(document.getElementById('numRows').value);
    let numColumns = parseInt(document.getElementById('numRows').value);


    if(numRows >=16 && numRows <=100 ) {

    this.setState({
        colors: generateColors(numRows, numColumns),
        display:'none'
    })
} else {
    alert('Broj mora biti u intervalu od 16-100');
    }
}

changeColor(rowIndex,columnIndex){

        let selectedColorType = 'black';
        let colorTypes = document.getElementsByName('colorType')
        for(let i =0; i<colorTypes.length;i++) {
            if(colorTypes[i].checked){
                selectedColorType = colorTypes[i].value
                break;
            }
        }

	let newColor = `rgb(
		${rgbValue()},
		${rgbValue()},
		${rgbValue()}
	)`

    if(selectedColorType === 'black') {
        newColor = 
        `rgb(
            0,
            0,
            0
        )`
    }

        let colors = this.state.colors;
       
        colors[rowIndex][columnIndex] = newColor;
	this.setState(
        {
            colors:colors
        }
    )
}

reset(e) {
e.preventDefault();

    this.setState({
        colors:[],
        display:'block'
    })
}

clear (e) {
    e.preventDefault();
    
    

    let numRows = parseInt(document.getElementById('numRows').value);
    let numColumns = parseInt(document.getElementById('numRows').value);



    this.setState({
        colors: generateColors(numRows, numColumns),
        display:'none'
    })
}

onHandleChange (e) {
    let numRows = e.target.value;

    if(numRows === '' || this.state.regexp.test(numRows)) {
        this.setState({ [e.target.name]:numRows })
    }
}


render(){
	return(
	<div className='container-fluid'>
        
        <div className='modal-dialog modal-dialog-centered' aria-hidden='true' style={{display:this.state.display}}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Etch-A-Sketch</h5>
                </div>
                <div className="modal-body">
                    <input type='tel' name ='numRows' value={this.state.numRows} id='numRows' onChange={this.onHandleChange} className='form-control' placeholder='Insert num of rows and columns' style={{width:'100%'}} />
                </div>
                <div className="modal-footer">
                    <button type="submit" ref={(button) => {this.state.generateBtn = button;}} className="btn btn-primary" onClick={this.hideModal}>Generate Again</button>
                </div>
            </div>
        </div>
        <div className='row' style={{display:this.state.display === 'none' ? 'block':'none'}}>
            <div className='col-md-12'>
                <form>
                     <input type='radio' name='colorType' value='random' />Random <br />
                     <input type='radio' name='colorType' value='black' />Black <br /> <br />
                     <button type='reset' onClick={this.reset} className='btn btn-primary' id='reset'  value='Reset'>Reset </button>&nbsp;
                     <button type='button' className='btn btn-primary' onClick={this.clear} value='Clear'>Clear </button> &nbsp;<br />
                </form>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 col-xs-12 col-sm-12 col-lg-12'>
                <center> 
                <table>
                    <tbody>
                        {this.state.colors.map((rowItem,rowIndex) => (
                       
                       <tr key={rowIndex}>
                            <Box key={rowIndex} rowColors={rowItem} rowIndex={rowIndex} changeColor={this.changeColor}/>    
                       </tr>
                ))}

                    </tbody>
                </table>
                </center>
            </div>
        </div>
	</div>
	)
}
}

export default BoxContainer
