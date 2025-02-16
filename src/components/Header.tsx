import instagram from "../assets/Instagram_logo.png";
import x from "../assets/X_logo.png";
import github from "../assets/github_logo.png";

function Header() {
  return (
    <header className="header text-bg-dark p-5 d-flex justify-content-between align-items-center">
      <h3>Carlos Chacón Atienza</h3>
      <div className="d-flex gap-4">
        <a href="https://www.instagram.com/carloss_ca16/" className="text-decoration-none text-light">
          <div className="d-flex align-items-center gap-2">
            <img src={instagram} alt="Instagram logo" width={35} />
            <h5 className="mb-0">Instagram</h5>
          </div>
        </a>
        <a href="https://x.com/Carlos5Noob" className="text-decoration-none text-light">
          <div className="d-flex align-items-center gap-2">
            <img src={x} alt="X logo" width={35} />
            <h5 className="mb-0">Twitter</h5>
          </div>
        </a>
        <a href="https://github.com/Carlos5Noob" className="text-decoration-none text-light">
          <div className="d-flex align-items-center gap-2">
            <img src={github} alt="GitHub logo" width={35} />
            <h5 className="mb-0">GitHub</h5>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;