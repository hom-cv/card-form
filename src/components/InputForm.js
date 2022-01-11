import react from "react"
import Stamp from "../images/logo.PNG"

export default function InputForm() {

    const [cardState, updateCard] = react.useState({
        image:"",
        user: "",
        dob: "",
        place: "",
        type: "",
        sign: ""
    })
    
    const [inputState, updateInput] = react.useState(false)


    function handleSubmit(event) {
        event.preventDefault()
        updateInput(true)
    }

    function handleChange(event) {
        const {type, name, value} = event.target
        updateCard(oldCard => ({
            ...cardState,
            [name]: value
        }))
    }
    
    return (
        <div className="page">
            <div hidden={inputState} className="input--form">
                <form onSubmit={handleSubmit}>
                    <input
                        autocomplete="off"
                        type="text"
                        placeholder="Image URL"
                        name="image"
                        value={cardState.image}
                        onChange={handleChange}
                    />
                    <input
                        autocomplete="off"
                        type="text"
                        placeholder="Name of Cardholder"
                        name="user"
                        value={cardState.name}
                        onChange={handleChange}
                    />
                    <input
                        autocomplete="off"
                        type="date"
                        placeholder="Date of Birth"
                        name="dob"
                        value={cardState.name}
                        onChange={handleChange}
                    />
                    <input
                        autocomplete="off"
                        type="text"
                        placeholder="Place of Issue"
                        name="place"
                        value={cardState.name}
                        onChange={handleChange}
                    />
                    <input
                        autocomplete="off"
                        type="text"
                        placeholder="Signature"
                        name="sign"
                        value={cardState.name}
                        onChange={handleChange}
                    />
                    <button>Create</button>
                </form>
            </div>
            <div className="card">
                <img className="card--pic" src={cardState.image} />
                <div className="card--text">
                    <h1>PERMANENT LICENSE OF TRAVEL</h1>
                    <h2>NO. 57240928502</h2>
                    <p>Issued to..............................................................................</p>
                    <p>Date of birth.........................................................................</p>
                    <p>Place of issue.........................................................................</p>
                    <p>Date of issue..........................................................................</p>
                    <h4>
                        LICENSE OF TRAVEL
                    </h4>
                    <h3>
                        This is to Certify that the person named and described above is permitted to travel and explore freely
                        unless detained by law.
                    </h3>
                    <h4>
                        IMPORTANT
                    </h4>
                    <h3>
                        The holder of this license wrote, composed and arranged all songs within the attached
                        record unless stated otherwise
                    </h3>
                    <div className="card--signature">
                        <h3>.....................................................................................................</h3>
                        <h3 className="signature--label">Signature of Authorized traveller</h3>
                    </div>
                </div>
                <h5 className="output--user">{inputState && cardState.user}</h5>
                <h5 className="output--dob">{inputState && cardState.dob}</h5>
                <h5 className="output--place">{inputState && cardState.place}</h5>
                <h5 className="output--type">{inputState && new Date().toISOString().slice(0, 10)}</h5>
                <h5 className="output--sign">{inputState && cardState.sign}</h5>
        </div>
        </div>
    )
}