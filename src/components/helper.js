// Method return a random number from 0 to 255
const rgbValue = () => {
    return Math.floor(Math.random() * 256)
    }
    
    // Method generates an array of rgb colors
    const generateColors = (numRows,numColumns) => {
    let colors = [];
    let colorIndex = 1;
        
    for(let i=0; i<numRows; i++){
        let rowColors = [];

        for(let j=0; j<numColumns;j++) {
                       
            rowColors.push(
                `rgb(245,245,245)`
            )
        }

        colors.push(rowColors);
        colorIndex++;
    }
    return colors
    }
    
    export { rgbValue, generateColors }
            