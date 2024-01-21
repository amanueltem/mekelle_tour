import React from "react";
import { Link } from "react-router-dom";
const HomePage=()=>{
    return(<div>
        <nav>
            <Link to="/add_package"><button>Add tour package</button></Link>
             <Link to="/add_place"><button>Add Place</button></Link>
        </nav>
    </div>
    )
}
export default HomePage;
