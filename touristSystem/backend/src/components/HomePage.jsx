import React from "react";
import { Link } from "react-router-dom";
const HomePage=()=>{
    return(<div>
        <nav>
            <Link to="/book-now"><button>Book Now</button></Link>
            <Link to="/buy-tour-package"><button>Buy Tour Package</button></Link>
            <Link to="/places"><button>Places</button></Link>
            <Link to="/map"><button>map</button></Link>
        </nav>
    </div>
    )
}
export default HomePage;