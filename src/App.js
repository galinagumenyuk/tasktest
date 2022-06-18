import "./App.css";
import { useJsApiLoader } from "@react-google-maps/api";
import Header from "./components/Header";
import Map from "./components/map/Map";
import NestedList from "./components/List/List";
import Autocomplete from "./components/autocomplete/Autocomplete";
import { useState, useCallback } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 50.4501,
  lng: 30.5234,
};

const libraries = ["places"];

const App = () => {
  const [center, setCenter] = useState(defaultCenter);
  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  return (
    <div>
      <Header />
      <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
      <div className="bodyWrapper">
        <NestedList />
        {isLoaded ? <Map center={center} /> : <h2>loading</h2>}
      </div>
    </div>
  );
};

export default App;
