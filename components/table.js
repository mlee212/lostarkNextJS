import styles from "./table.module.css"


export default function Table() {
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
                            <input type="checkbox"/>
                        </td>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        

                    </tr>
                </tbody>
            </table>
        </div>
    )
}