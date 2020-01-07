import React from 'react';
import './AddCredits.css';

const white = {
    color:"white"
}

const bold ={
    fontWeight: "bold"
}

const AddCredits = props => {
    return (
        <div onClick={()=> props.increaseCredits(props.creditsAdded)} style={bold}>
            <div style={white}>
                {`ADD ${props.creditsAdded}`}
            </div>
            <div className="slot">
                <div className="slotInnerBorder">
                <div className="slotInnerLeft"></div>
                <div className="slotInnerRight">INSERT COIN</div>
                </div> 
            </div>
        </div>
    )
}

export default AddCredits;
