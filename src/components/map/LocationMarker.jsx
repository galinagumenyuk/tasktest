import { Marker } from "@react-google-maps/api";

const LocationMarker = ({ position }) => {
    return (<div>
         <Marker position={position}/>
    </div>)
   
}

export default LocationMarker;
