import {BrowserRouter, Routes, Route} from "react-router-dom";
import Payment from "./pages/Payment";

const basename = import.meta.env.BASE_URL;

export default function App() {

  return (
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
  )
}
