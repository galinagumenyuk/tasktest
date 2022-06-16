import s from "./Autocomplete.module.css"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect } from "react";


const Autocomplete = ({isLoaded}) => {
     const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

    //   getGeocode({ address: description }).then((results) => {
    //     const { lat, lng } = getLatLng(results[0]);
    //     console.log("📍 Coordinates: ", { lat, lng });
    //   });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
          <li key={place_id} onClick={handleSelect(suggestion)} className={s.listItem}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

    useEffect(() => {
        if (isLoaded) { 
            init();
        }
     },[isLoaded, init])

    return (
        <div className={s.container}>
            <div className={s.wrapper} ref={ref}>
                <input type="text" placeholder="Я хочу орендувати" className={s.input}></input>
                <input type="text" placeholder="Спосіб оренди" className={s.input}></input>
                <input type="text" placeholder="Період оренди" className={s.input}></input>
                <input type="text" placeholder="Де шукати?"
                        value={value}
                        onChange={handleInput}
                        disabled={!ready}
                        className={s.input}></input>
                {status === "OK" && <ul className={s.suggestions}>{renderSuggestions()}</ul>}
              
                <button type="button" className={s.btn}>Пошук</button>
            </div>
           
        </div>
    )
 }

export default Autocomplete;