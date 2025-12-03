import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

function Controls() {

  const inputElement=  useRef();

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value))
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value))
    inputElement.current.value ="";
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.privacyToggle());
  }
  
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary" onClick={handleIncrement}>
          +1
        </button>
        <button type="button" class="btn btn-success" onClick={handleDecrement}>
          -1
        </button>
        <button type="button" class="btn btn-warning" onClick={handlePrivacyToggle} >Privacy Toggle</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="enter number" className="number-input"
        ref={inputElement}
        />
        <button type="button" class="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button type="button" class="btn btn-danger" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controls;
