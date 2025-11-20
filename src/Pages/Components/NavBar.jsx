import "../../Styles/NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <>
            <nav className="NavBar-wrapper">
                <h1 className="NavBar-Title">MathMagicians</h1>

                <ul className="navBar-lists">
                    <Link className="navBar-lists-link" to="/">Home</Link>
                    <Link className="navBar-lists-link" to="/CalculatorApp">Calculator</Link>
                    <Link className="navBar-lists-link Quote-list-link" to="/QuotesApp">Quote</Link>
                </ul>
            </nav>
        </>
    )
}