
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return(
        <nav>
            <Link id='link1' to="/"> Home</Link>
        </nav>
    );
}

export default Navbar;