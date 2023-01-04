import TableRow from "./TableRow"
import { useDispatch } from 'react-redux'
import { deletePerson } from "../reducers/personReducer"
import "../App.css"

const Table = (props)=>{



    return(
        <div className="Table">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {props.table.map(e=><TableRow key={e.id} person={e}/>)}
                </tbody>

            </table>
        </div>
        
    )
}

export default Table