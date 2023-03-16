import { useNavigate } from "react-router";

function useSearch(setInputValue) {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event, inputValue) => {
    if (event.key === "Enter") {
      navigate(`/search?q=${inputValue}`);
      setInputValue("");
    }
  };
  return [handleChange, handleKeyDown];
}

export default useSearch;
