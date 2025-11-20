import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CalculatorPage from "./Pages/CalculatorPage";
import QuotePage from "./Pages/QuotePage";

const App = () => {
  return (
    <>
    
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CalculatorApp" element={<CalculatorPage/>} />
          <Route path="/QuotesApp" element={<QuotePage/>} />
      </Routes>
    </>
  )
}

export default App;