import photo from "../assets/face-photo.png"
import Message from "./Message";


function Body() {
    return <section className="d-flex align-items-center ms-5 mt-3">
        <img className="ms-5 img-fluid w-25 rounded-circle mt-5 shadow-lg" src={photo} alt="foto perfil" />
        
     
        <div className="ms-5 ps-5">
            <Message />
        </div>

    </section>
}

export default Body;