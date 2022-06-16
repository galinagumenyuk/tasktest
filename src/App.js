import "./App.css";
import { useJsApiLoader } from "@react-google-maps/api";
import Header from "./components/Header";
import Map from "./components/map/Map";
import Autocomplete from "./components/autocomplete/Autocomplete";
const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 50.46814634277773,
  lng: 30.401313063105033,
};

const libraries = ["places"];

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  return (
    <div>
      <Header />
      <Autocomplete isLoaded={isLoaded} />
      {isLoaded ? <Map center={defaultCenter} /> : <h2>loading</h2>}
    </div>
  );
};

export default App;
