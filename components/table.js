import React, { useState, useEffect } from 'react'
import styles from "./table.module.css"
import {Cell} from "./cell.js"

// var array = []
// var checkboxes = document.querySelectorAll('input[type=checkbox]')

function FullTable() {
    const [checkboxes, setchecks] = useState(Array(3).fill(false))

    useEffect(() => {
            localStorage.setItem('userID', JSON.stringify(checkboxes))
        }, [checkboxes])

    const handleClick = (i) => {
        const cellClone = checkboxes.slice();
        cellClone[i] = !cellClone[i];
        setchecks(cellClone);
        console.log("before:", cellClone)
        console.log("ok buddy")
        var myjsonStr = JSON.stringify(cellClone)
        console.log(myjsonStr)
        
    }

    const renderCell = (i) => {
        return <Cell
            value={checkboxes}
            onClick={() => {
                handleClick(i)
                
            }}
            
        />
    }

    return (
        <div className={styles.test}>
        <p> hello</p>
        <table>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Daily #1</th>
                    <th>Daily #2</th>
                    <th>Daily #3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gunslinger</td>
                    <td>
                        {renderCell(0)}
                        
                    </td>
                    <td>
                        {renderCell(1)}
                    </td>
                    <td>
                        {renderCell(2)}
                    </td>
                    

                </tr>
            </tbody>
        </table>
    </div>
    )
    

}


export default function Table() {
    return (
        <FullTable/>
    )
}