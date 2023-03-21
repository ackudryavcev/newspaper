import { useNavigate } from "react-router";

function useSearch(setInputValue, setDateStart, setDateEnd) {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleForm = (event, inputValue, start, end) => {
    event.preventDefault();
    const date = new Date();
    let rfc3339Date = date.toISOString().slice(0, 10);
    if (!start || !end) {
      if (!end && start) {
        navigate(`/search?q=${inputValue}&start=${start}&end=${rfc3339Date}`);
      } else if (end && !start) {
        const dateArr = end.split("-");
        rfc3339Date = [dateArr[0] - 1, dateArr[1], dateArr[2]].join("-");
        navigate(`/search?q=${inputValue}&start=${rfc3339Date}&end=${end}`);
      } else {
        const dateArr = rfc3339Date.split("-");
        const rfc3339DateStart = [dateArr[0] - 1, dateArr[1], dateArr[2]].join(
          "-"
        );
        navigate(
          `/search?q=${inputValue}&start=${rfc3339DateStart}&end=${rfc3339Date}`
        );
      }
    } else {
      navigate(`/search?q=${inputValue}&start=${start}&end=${end}`);
    }

    setInputValue("");
    setDateStart("");
    setDateEnd("");
  };

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const rfc3339Date = date.toISOString().slice(0, 10);
    event.target.id === "date-start"
      ? setDateStart(rfc3339Date)
      : setDateEnd(rfc3339Date);
  };

  return [handleChange, handleForm, handleDateChange];
}

export default useSearch;
