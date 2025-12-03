import { useDispatch } from "react-redux";
import { useRef } from "react";

function Controls() {

  const inputElement=  useRef();

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "Add" , payload:{
        num:inputElement.current.value
      }
    }  
    );
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({type : "Subtract" , 
      payload:{
        num:inputElement.current.value
      }
    })
    inputElement.current.value ="";
  }

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type : "PRIVACY_TOGGLE" })
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
