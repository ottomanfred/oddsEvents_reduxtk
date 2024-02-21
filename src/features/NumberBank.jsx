import { useDispatch, useSelector } from "react-redux";
import {
  sortOne,
  sortAll,
  selectNumbers,
  selectOdds,
  selectEvens,
} from "./numberBankSlice";

export default function NumberBank() {
  const dispatch = useDispatch();

  const numbers = useSelector(selectNumbers);
  const odds = useSelector(selectOdds);
  const evens = useSelector(selectEvens);

  const onSort = (e) => {
    e.preventDefault();

    const action = e.target.name;

    if (action === "sortOne") {
      dispatch(sortOne());
    }
    if (action === "sortAll") {
      dispatch(sortAll());
    }
  };

  return (
    <section id="numberBank">
      <h1>Number Bank</h1>
      <output>{numbers}</output>
      <div>
        <button onClick={onSort} name="sortOne">
          Sort 1
        </button>
        <button onClick={onSort} name="sortAll">
          Sort All
        </button>
      </div>
      <h1>Sorted Numbers</h1>
      <h1>Odds</h1>
      <output>{odds}</output>
      <h1>Evens</h1>
      <output>{evens}</output>
    </section>
  );
}
