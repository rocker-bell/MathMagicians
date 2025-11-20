import "../Styles/QuotePage.css"
import NavBar from "./Components/NavBar"
import Quotes from "./Components/Quotes.jsx"
export default function QuotePage() {
    return (
        <>
            <div className="QuotePage-wrapper">

                <NavBar/>
                 <main className="QuotePage-content">
                    <Quotes />
                  </main>
            </div>
        </>
    )
}