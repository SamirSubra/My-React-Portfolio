import HomePage from "./pages/HomePage.tsx";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Menu from "./layouts/Menu.tsx";
import "./App.scss";
import "@/styles/index.scss";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

function App() {

  return (
    <BrowserRouter>
        <div className="app">
            <Menu/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
