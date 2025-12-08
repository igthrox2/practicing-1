import { useSelector , useDispatch } from "react-redux";
import { useEffect  } from "react";

function FetchItems() {
    const fetchStatus = useSelector(Store => Store.fetchStatus)
    console.log(fetchStatus)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("hi bro inside useEffect")
        if (fetchStatus.fetchDone) return
        const controller = new AbortController();
        const signal = controller.signal;
         console.log("fetch started ")
        fetch("http://127.0.0.1:8080/items")

        .then((res) => {``
            console.log("Response received:", res.status)
            return res.json()})
        .then((items) => {
            console.log('items fetched ' ,items)
        });

        return () => controller.abort();
        
        }, [fetchStatus]
    );

    
    
    return (
        <>
            <div>
                fetchDone :{fetchStatus.fetchDone}
                currentlyFetching: {fetchStatus.currentlyFetching}
            </div>
        </>
    )
}

export default FetchItems;