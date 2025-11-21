// import "../../Styles/NavBar.css";
// import { Link } from "react-router-dom";
// export default function NavBar() {
//     return (
//         <>
//             <nav className="NavBar-wrapper">
//                 <h1 className="NavBar-Title">MathMagicians</h1>

//                 <ul className="navBar-lists">
//                     <Link className="navBar-lists-link" to="/">Home</Link>
//                     <Link className="navBar-lists-link" to="/CalculatorApp">Calculator</Link>
//                     <Link className="navBar-lists-link Quote-list-link" to="/QuotesApp">Quote</Link>
//                 </ul>
//             </nav>
//         </>
//     )
// }

import "../../Styles/NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <>
                <nav className="NavBar-wrapper">
                    <h1 className="NavBar-Title">MathMagicians</h1>

                    <ul className="navBar-lists">
                        <li className="navBar-lists-list"><Link className="navBar-lists-link" to="/">Home</Link></li>
                        <li className="navBar-lists-list"><Link className="navBar-lists-link" to="/CalculatorApp">Calculator</Link></li>
                        <li className="navBar-lists-list"><Link className="navBar-lists-link" to="/QuotesApp">Quote</Link></li>
                    </ul>
                </nav>
        </>
    )
}



