import { useSelector } from "react-redux";

function DisplayCounter () {
  const counters = useSelector(store => store.counter);  
  
  return (
        <p className="lead mb-4">
          Counter Current Value : {counters} 
        </p>
    )
}

export default DisplayCounter;