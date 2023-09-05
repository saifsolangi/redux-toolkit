import Home from "./Home";
import { useSelector } from "react-redux";

function App() {
  const value = useSelector(state => state.custom.c)
  return (
    <>
      {value}
      < Home />
    </>
  );
}

export default App;
