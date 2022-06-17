import s from "./Autocomplete.module.css"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect, useState } from "react";


const Autocomplete = ({isLoaded, onSelect}) => {
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

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
          console.log("📍 Coordinates: ", { lat, lng });
          onSelect({ lat, lng });
      });
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
    }, [isLoaded, init]);

    const [rent, setRent] = useState("");
    const [way, setWay] = useState("");
    const [time, setTime] = useState("");
    

     const handleChange = (e) => {
    switch (e.target.name) {
      case "rent":
        setRent(e.target.value);
        break;
      case "way":
        setWay(e.target.value);
            break;
         case "time":
        setTime(e.target.value);
            break;
      default:
        return;
    }
  };
    
    const onHandleSubmit = e => {
    e.preventDefault();
//   createRequest(rent, way, time, );
        console.log(rent, way, time);
    setRent("");
        setWay(""); 
        setTime("");
    }

    return (
        <div className={s.container}>
            <form className={s.form} ref={ref} onSubmit={onHandleSubmit}>
                <input type="text"
                    name="rent"
                    value={rent}
                    onChange={handleChange}
                    placeholder="Я хочу орендувати"
                    className={s.input}></input>
                <input type="text"
                    name="way"
                    value={way}
                    onChange={handleChange}
                    placeholder="Спосіб оренди"
                    className={s.input}></input>
                <input type="date"
                    name="time"
                    value={time}
                    onChange={handleChange}
                    placeholder="Період оренди"
                    className={s.input}></input>
                <input type="text" placeholder="Де шукати?"
                        value={value}
                        onChange={handleInput}
                        disabled={!ready}
                        className={s.input}></input>
                {status === "OK" && <ul className={s.suggestions}>{renderSuggestions()}</ul>}
              
                <button type="submit" className={s.btn}>Пошук</button>
            </form>
           
        </div>
    )
 }

export default Autocomplete;