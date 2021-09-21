import { useState } from "react"
import {Input,Button} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { Addtodo } from "../actions";
    
export default function AddTodo(){
    const dispatch = useDispatch();
    const [state, setstate] = useState()
    return(
        <div className="AddTodo">
            <Input type="text" id="to" placeholder="Enter a Todo" onChange={(e)=>{
                setstate(e.target.value)
            }}/>
            <Button variant="contained" color="secondary" onClick={()=>{
                console.log(state)
                dispatch(Addtodo(state))
                document.getElementById('to').value=" "
                
            }}>Add</Button>
        </div>
    )
}