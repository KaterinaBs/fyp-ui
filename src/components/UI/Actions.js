import React from "react";
import PropTypes from 'prop-types';
import'./Actions.css';



ActionTray.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
  }
  
  export function ActionTray({children}) {
    return (
      <div className="ActionTray">
        { children }
      </div>
    );
  }





//-------------------Action Button-------------------------------
ActionButton.propTypes={
    onclick:PropTypes.func.isRequired,
    showText:PropTypes.bool,
    buttonTetx:PropTypes.string.isRequired,
};

function ActionButton ({children, onClick, showText, buttonTetx}){
    return (
        <button className="Action" onclick={onClick}>
            {children}
            {showText && <p>{buttonTetx}</p>}
        </button>
    );
}

//--------------------Actions---------------------------------------------


const ActionPropTypes = {
    onClick:PropTypes.func.isRequired,
    showText:PropTypes.bool
};
//-------------------- ADD ACTION----------------------------------------


ActionAdd.propTypes = ActionPropTypes; 

export function ActionAdd({ onClick, showText=false, buttonText=null}){
    return (
        <ActionButton buttonTetx = {buttonText || "Add"} onClick={onClick} showText={showText}>
        </ActionButton>
    );
}

//-------------------- CANCEL ACTION----------------------------------------


ActionCancel.propTypes = ActionPropTypes; 

export function ActionCancel({ onClick, showText = false, buttonText=null}){
    return (
        <ActionButton buttonTetx = {buttonText || "Cancel"} onClick={onClick} showText={showText}>
        </ActionButton>
    );
}



export function ActionShowForm({ onClick, showText=false, buttonText=null}) {
    return (
      <ActionButton buttonText={buttonText || "Show Form"} onClick={onClick} showText={showText} >
        
      </ActionButton>
    );
  }


