import { useNavigate } from "react-router";

// hook for handle function in search form

function useSearch(setInputValue, setDateStart, setDateEnd) {
  const navigate = useNavigate();

  // handle change in input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // handle click on button or enter in input

  const handleForm = (event, inputValue, start, end) => {
    event.preventDefault();

    // for search we need use rfc3339 standard date only date without time
    const date = new Date();
    let rfc3339Date = date.toISOString().slice(0, 10);

    //if we don't have one of the date in form
    if (!start || !end) {
      //if we don't have end date, we use today from end date
      if (!end && start) {
        navigate(`/search?q=${inputValue}&start=${start}&end=${rfc3339Date}`);
      } // if we don't have start date we use date a year ago to end
      else if (end && !start) {
        const dateArr = end.split("-");
        rfc3339Date = [dateArr[0] - 1, dateArr[1], dateArr[2]].join("-");
        navigate(`/search?q=${inputValue}&start=${rfc3339Date}&end=${end}`);
      } // if we don't have start and end date we are looking for last year
      else {
        const dateArr = rfc3339Date.split("-");
        const rfc3339DateStart = [dateArr[0] - 1, dateArr[1], dateArr[2]].join(
          "-"
        );
        navigate(
          `/search?q=${inputValue}&start=${rfc3339DateStart}&end=${rfc3339Date}`
        );
      }
    } //if we have start and end date from user we use them
    else {
      navigate(`/search?q=${inputValue}&start=${start}&end=${end}`);
    }

    setInputValue("");
    setDateStart("");
    setDateEnd("");
  };

  // handle change in date input
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
