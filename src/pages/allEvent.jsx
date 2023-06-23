import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";

const AllEvents = () => {
    // const [events, setEvents] = useState([])
    // const db = getDatabase();
    // useEffect(() => {
    //     console.log("active")
    //     get(ref(db, "events/")).then((snapshot) => {
    //         console.log(snapshot.val())
    //         setEvents(snapshot.val())
    //     }).catch((error) => {
    //         console.log(error.message)
    //     })
    // }, [])
    // console.log(events);
    // return (
    //     <div>
    //         {events.map((item, index) => {
    //             <div key={index}>
    //                 <h1>{item}</h1>
    //             </div>
    //         })}
    //     </div>
    // )


}

export default AllEvents