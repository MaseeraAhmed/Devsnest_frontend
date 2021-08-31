import './App.css';
import { Button, Input, InputLabel } from '@material-ui/core';
import {getUser} from './Actions';
import {useSelector,useDispatch} from 'react-redux';

function App() {

 const data = useSelector((state) => state.data);
 const dispatch = useDispatch();
  return (
    <div className="App">
    <div className="Form">
      <h1>Input</h1><br/>
      <form action="">
        <table>
        <tbody>
          <tr>
            <td>
              <InputLabel >FullName: </InputLabel>
            </td>
            <td>
              <Input type="Fullname" name="Fullname" id="Fullname" label="Fullname" placeholder="Enter Fullname"></Input>
            </td>
          </tr>
          <tr>
            <td>
              <InputLabel >Email: </InputLabel>
            </td>
            <td>
              <Input type="email" name="email" id="email" label="email" placeholder="Enter email"></Input>
            </td>
          </tr>
          
          <tr >
            <td colSpan="2" style={{paddingLeft:"40%"}}>
              <Button variant="contained" color="default" onClick={()=>{

               var FullName=document.getElementById("Fullname").value,
                email=document.getElementById("email").value
               
                //  var details={FName:`${FullName}`,Uname:Username,Mail:Email,Pass:Password}
                dispatch(getUser({FName:FullName,Mail:email}));
                
                }}>Submit</Button>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
      </div>
      <div className="Data">
        <h1> Data</h1>
        <table>
            <tr>
              <td>
                Full Name:
              </td>
              <td>
              {data.obj.FName}
              </td>
            </tr>
            <tr>
              <td>
              Email:
              </td>
              <td>
              {data.obj.Mail}
              </td>
            </tr>
            
          
        </table>
      </div>

    </div>
  );
}

export default App;
