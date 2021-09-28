import {Button, Input} from '@material-ui/core' ;
// import { useState } from 'react';
import { GetPlace,GetPlaceData } from '../actions';
import {useSelector,useDispatch} from 'react-redux';


 const GetName =()=>{
    
     const place = useSelector((state) => state.GetPlace);    
     const dispatch = useDispatch();

    return(
        <div className="container mt-3 p-5 d-flex justify-content-center col-md-12 " >

            <Input style={{"backgroundColor":"rgba(49, 148, 173, 0.555)","width":"20rem"}} color="secondary" className="m-3 p-2 rounded-pill" type="text" value={place} placeholder="Enter A city Name" onChange={(e)=>{
                dispatch(GetPlace(e.target.value))
            }}></Input>
            <Button className="m-3 p-2" variant="contained" color="secondary" onClick={()=>{
                dispatch(GetPlaceData(place))
                                
            }}>Search</Button>
            
        </div>
    )
}

export default GetName;