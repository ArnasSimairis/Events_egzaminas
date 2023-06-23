import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { getDatabase, set, ref} from "firebase/database";

const EventForm = () => {
    const database = getDatabase()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [place, setPlace] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [isHere, setIsHere] = useState(false)
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user);
            setIsHere(true)
        } else {

        }
    })
    const heandleEventSubmit = (e) =>{
        e.preventDefault()
        const time = new Date()
        set(ref(database, 'events/' + time), {
            _title: title,
            _description: description,
            _place: place,
            _date: date,
            _image: image,
            isApproved: false,
        })
    }

    if (isHere === true) {
        return (
            <div>
                <section className="form">
                    <form >
                        <div className="form-group">
                            <label htmlFor="text">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                placeholder="enter title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                placeholder="enter description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Place</label>
                            <input
                                type="text"
                                name="place"
                                id="place"
                                value={place}
                                placeholder="enter place"
                                onChange={(e) => setPlace(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Image</label>
                            <input
                                className="ImageBackground"
                                type="text"
                                placeholder="image addres"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn " type="submit" onClick={heandleEventSubmit}>
                                Add Event
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        )

    } else {
        return (
            <div>
                Plase log in to create an event
            </div>
        )

    }
}
export default EventForm