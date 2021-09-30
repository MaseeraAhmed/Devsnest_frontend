import { useSelector } from "react-redux";

const GetCard = () => {
    const PlaceData = useSelector((state) => state.GetPlaceData);
    return (
        
        <div style={{ "width": "28rem" }} className="container mt-3 p-5 d-flex flex-column justify-content-between align-items-center border border-dark image_card  col-md-12 ">
          
          {PlaceData.location?
            (<>
                <div className="container ms-0.7 p-2 d-flex flex-column align-items-center">
                <img style={{ "width": "12rem" }} src={PlaceData.current.condition.icon} alt=""/>
                <h6 >{PlaceData.current.condition.text}</h6>
            </div>
            <div className="container p-2 p-2 d-flex flex-column align-items-center">
                <h1 className="col ms-3">{PlaceData.current.temp_c}°</h1>
                <div className="col">{PlaceData.location.name}</div>
            </div>
            <div className="container  p-2 p-2 d-flex justify-content-between">
               
                    <div className=" m-2">Humidity<br/>{PlaceData.current.humidity}</div>
                    <div className=" m-2 ">Wind<br/>{PlaceData.current.wind_kph}</div> 
                    <div className=" m-2">Precipitation<br/>{PlaceData.current.precip_in}</div>
               
            </div>
            </>)
            :<h1>No Data</h1>
            }
        </div>
     
    )
}

export default GetCard;