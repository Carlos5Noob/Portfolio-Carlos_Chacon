import photo from "../assets/face-photo.png";
import Message from "./Message";
import "../App.css";

function Body() {
  return ( // el body es un contenedor con margen arriba. Los div del contenedor lo divida en 2 columnas y los alineo al centro. Además, la imagen es responsive y lo redondeo y le aplico sombras. Ademas, le doy estilo para que sea responsive.
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
