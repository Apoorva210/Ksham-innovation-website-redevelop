import "./navbar.scss";

const Navbar = ()=> {
    return( 
        <div className="main">
            
            <div className="left">
                <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
                </ul>
            </div>

            <div className="center">
            <div className="logo">
                <h1>Ksham Innovation</h1>
            </div>
            </div>

            <div className="right">
                <ul>
                <li><a href="">Help</a></li>
                <li><a href="">Wishlist</a></li>
                <li><button className="button"><a href="">Profile</a></button></li>
                </ul>
                
            </div>

        </div>
    )
       
}
  

export default Navbar