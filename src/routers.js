import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import UserProvider from "./context/UserContext";
import About from "./pages/about/About";

const Routers = () => {
  return (
      <BrowserRouter>
      <UserProvider>
        <Header />
          <Routes>
          <Route path="/" element={<About />} />
          </Routes>
      </UserProvider>
      </BrowserRouter>
  )
}

export default Routers