// CSS
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbarHeader">
        <nav>
            <div className="navbarHouse">
                {/* <div> Ícones feitos por <a href="" title="NajmunNahar"> NajmunNahar </a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com'</a></div> */}
                <Link to={`/`}><img src="../../img/home.png" alt="Home" /></Link>
            </div>

            <div className="navbarUser">
                <Link to={`/user`}><img src="../../img/profileUser.png" alt="User" /></Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar