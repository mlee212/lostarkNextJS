import React from 'react'
import styles from "./cell.module.css"

export function Cell(props) {

    function handleChange(e)  {
        // console.log('yo',e);
        // e.value = !e.value;
    }

    return (
        
        <label className={ styles.switch}>
            <input type="checkbox" 
                checked={props.value}
                className={ styles.checkbox } 
                onClick={ props.onClick }
                onChange={ handleChange}>
            {/* {props.value} */}
            </input>
            <span className={ styles.slider }></span>
            
        </label>
    )
}