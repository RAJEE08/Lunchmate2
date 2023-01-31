
import {Link} from "react-router-dom";
const Navbar = () => {
   return (  
      <nav className="navbar">
         <div className="logo"></div>
         <div className="links">

            <Link to="/Carousel" style={{
               color: "black",
               backgroundColor: '#FFCE44',
               borderRadius:'8px'
            }}>
              <p>Home</p> 
   
            </Link>
            <Link to="/About"><p>About</p></Link>
         <Link to="/Contact"><p>Contact</p></Link>

         </div>
      </nav>
   );
}
 
export default Navbar;