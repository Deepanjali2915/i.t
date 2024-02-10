import './App.css';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light header"  >
            <div className="container-fluid">
                <a className="navbar-brand text " href="#">TAG <span>co.</span> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 content ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li><li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>

                    </ul>
                    <form className="d-flex mainsearch " role="search">
                        <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn  searchimage " type="submit"><img src="Search.jpg" alt="Image 1"/></button>
                    </form>
                    
                    <div className="image-container imagecontent ">
                        <img src="heart.png" alt="Image 1"/>
                        <img src="bag.png" alt="Image 2"/>
                        <img src="avtar.png" alt="Image 3"/>
                    </div>
                            </div>
                    </div>
                </nav>
         
)};
                export default Header;
