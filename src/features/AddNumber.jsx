import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNumber } from "./numberBankSlice";

export default function AddNumber() {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  const onAdd = (e) => {
    e.preventDefault();
    dispatch(addNumber(+userInput));
  };

  return (
    <form onSubmit={onAdd}>
      <label>
        Add a Number to the Bank
        <input
          name="number"
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </label>
      <button>Add Number</button>
    </form>
  );
}
