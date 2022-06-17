import { Marker } from "@react-google-maps/api";
import s from "./LocationMarker.module.css";

const LocationMarker = ({ position }) => {
    return (<div>
         <Marker position={position}/>
    </div>)
   
}

export default LocationMarker;
// icon={{url: '../../../public/icons/mark.svg'}} label={{ text: "20", className:s.text }} 