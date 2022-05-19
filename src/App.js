import "./reset.css"
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.js"
import Container from "./Container"
import Sessions from "./Sessions"
import Seats from "./Seats"
import Success from "./Success"


export default function App() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                   <Route path ="/" element={<Container />}/>
                   <Route path="/sessoes/:filmID" element={<Sessions />}/>
                    {/*<Seats />*/}
                    {/*<Success/>*/}
                </Routes>
            </BrowserRouter>
        );
    
    
  }
  