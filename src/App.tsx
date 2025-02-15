import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/footer";
import Experiencia from "./components/Experiencia";

function App() {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header />
          <div className="flex-grow-1">
            <Body />
          </div>
          <div className="flex-grow-1">
            <Experiencia />
          </div>
        <Footer />
      </div>
    </>
  )
}

export default App;