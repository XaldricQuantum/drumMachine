

function DisplayContainer(props) {
    const style = {float: 'right'}
    // console.log(props.displayText)
    const handleOnClickPower = (event) => {
        // console.log(event.target.style.float);
        // event.target.style.float = 'left'
        props.updatePowerSwitch()
        if (event.target.style.float === 'right') {
            event.target.style.float = 'left'
        } else if (event.target.style.float === 'left') {
            event.target.style.float = 'right'
        } else {
            event.target.style.float = 'right'
        }
    }

    const handleOnClickBank = (event) => {
        // console.log(event.target.style.float);
        // event.target.style.float = 'left'
        props.updateBankSwitch()

        if (event.target.style.float === 'right') {
            event.target.style.float = 'left'
        } else if (event.target.style.float === 'left') {
            event.target.style.float = 'right'
        } else {
            event.target.style.float = 'right'
        }
        
    }

    return(<div className="display-container">
            <p className="display" id="display">{props.displayText}</p>
            <p className="power-text">Power</p>
            <div className="power-container">
                
                <div className="power-selector" style={style} onClick={handleOnClickPower}></div>
            </div>
            <div className="divider"></div>
            <p className="power-text">Bank</p>
            <div className="power-container">
                
                <div className="bank-selector" style={style} onClick={handleOnClickBank}></div>
            </div>
           </div>)

} 

export default DisplayContainer