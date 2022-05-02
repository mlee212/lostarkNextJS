import React from 'react'
import styles from "./cell.module.css"

export function Cell(props) {
    return (
        
        <label className={ styles.switch}>
            <input type="checkbox"
                className={ styles.checkbox } 
                onClick={ props.onClick }>
            {/* {props.value} */}
            </input>
            <span className={ styles.slider }></span>
            
        </label>
    )
}