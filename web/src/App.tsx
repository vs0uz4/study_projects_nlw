import { Fragment } from "react";
import { Habit } from "./components/Habit";

function App() {
  return (
    <Fragment>
      <Habit completed={5} />
      <Habit completed={10} />
      <Habit completed={15} />
      <Habit completed={20} />
      <Habit completed={25}/>
    </Fragment>
  )
}

export default App
