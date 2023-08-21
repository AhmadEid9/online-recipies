import { Link } from "react-router-dom";

const Navbar= () =>{
    return (
    <div>
        <ul> 
            <li>
                <Link to="/">Dogs</Link>
            </li>

            <li>
                <Link to="/cats">Cats</Link>
            </li>
            
            <li>
                <Link to="/sheeps">Sheeps</Link>
            </li>
            
            <li>
                <Link to="/goats">Goats</Link>
            </li>
        </ul>
    </div>
    );
  }
  export default Navbar;