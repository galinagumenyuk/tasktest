import React, { useRef } from "react";
import { GoogleMap } from "@react-google-maps/api"
import s from "./Map.module.css";
import { themeDefault } from "./themeMap";

const containerStyle = {
  width: '100%',
  height: '100%'
};
const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    clickableIcons: true,
    fullscreenControl: false,
    styles: themeDefault

};

const Map = ({center}) => {     
    const mapRef = useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    // setMap(null)
  }, [])
    
    return (
        <div className={s.container}>
             <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
</div>
    )
}

export default Map;