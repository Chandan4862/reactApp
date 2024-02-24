import "./assets/main.css";
import IncrementCounter from "./components/incrementCounter";
import DecrementCounter from "./components/decrementCounter";
import { useCounterStore } from "./store";
import { useEffect } from "react";
import Questionnarire from "./components/Parent";

function App() {
  const { counter } = useCounterStore((state) => ({ counter: state.counter }));
  useEffect(() => {
    console.log("rerender App");
  }, []);
  return (
    <div>
      <div>Counter: {counter}</div>
      <Questionnarire />
      <IncrementCounter />
      <DecrementCounter />
    </div>
  );
}
export default App;
