import instagram from "../assets/Instagram_logo.png";
import x from "../assets/X_logo.png";
import github from "../assets/github_logo.png";

function Header() {
  return (
    <header className="text-bg-dark p-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
      <h3 className="mb-3 mb-md-0">Carlos Chacón Atienza</h3>
      <div className="d-flex flex-column flex-sm-row gap-3">
        <a href="https://www.instagram.com/carloss_ca16/" className="text-decoration-none text-light">
          <div className="d-flex align-items-center gap-2">
            <img src={instagram} alt="Instagram logo" width={30} />
            <h5 className="mb-0">Instagram</h5>
          </div>
        </a>
        <a href="https://x.com/Carlos5Noob" className="text-decoration-none text-light">
          <div className="d-flex align-items-center gap-2">
            <img src={x} alt="X logo" width={30} />
            <h5 className="mb-0">Twitter</h5>
          </div>
        </a>
        <a href="https://github.com/Carlos5Noob" className="text-decoration-none text-light">
          <div className="d-flex align-items-center gap-2">
            <img src={github} alt="GitHub logo" width={30} />
            <h5 className="mb-0">GitHub</h5>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
