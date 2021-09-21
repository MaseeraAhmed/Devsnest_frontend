import { Button } from "@material-ui/core";
import { Deletetodo } from "../actions";
import {useDispatch,useSelector} from 'react-redux';

export default function ListTodo() {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todos)
    return (
        <div className="list">
            {
            todo.map((val,index)=>
                <div key={index} className="todo_list">
                    <h3>{val}</h3>
                    <Button variant="outlined" color="default" onClick={()=>{
                        dispatch(Deletetodo(index))
                    }}>Delete</Button>
                </div>
                )
            }
        </div>
    )
}