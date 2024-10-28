import Personal from './pages/Personal';
import Header from './static/Header';
import Footer from './static/Footer';
import Buisness from './pages/Buisness';
import Company from './pages/Company';
import Help from './pages/Help';
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Personal/>}>
            </Route>
            <Route path="/buisness" element={<Buisness />}>
            </Route>
            <Route path="/company" element={<Company />}>
            </Route>
            <Route path="/help" element={<Help />}>
            </Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

