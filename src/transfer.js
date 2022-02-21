import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("https://onec.in/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}