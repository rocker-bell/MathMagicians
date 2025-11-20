import "../Styles/CalculatorPage.css";
import NavBar from "./Components/NavBar";
import CalculatorApp from "./Components/Calculator";
 
export default function CalculatorPage() {
    return (
        <>

            <div className="CalculatorPage-wrapper">
  <NavBar />
  <main className="CalculatorPage-content">
    <CalculatorApp />
  </main>
</div>
            
        </>
    )
}


