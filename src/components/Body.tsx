import photo from "../assets/face-photo.png";
import Message from "./Message";
import "../App.css";

function Body() {
  return (
    <section className="container mt-5">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-4 col-12">
          <img className="img-fluid w-75 rounded-circle shadow-lg" src={photo} alt="foto perfil" />
        </div>
        <div className="col-md-8 col-12 mt-3 mt-md-0">
          <Message />
        </div>
      </div>
    </section>
  );
}

export default Body;
