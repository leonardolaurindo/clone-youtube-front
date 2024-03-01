import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { MenuStorage } from "./contexts/OpenMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import { UserStorage } from "./context/userContext";
import Login from "./pages/login";

function App() {

  const [openMenu, setOpenMenu] = useState(true);

  return (
    <UserStorage>
      <MenuStorage>
        <BrowserRouter>
          <div className="App">
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <div style={{ width: '100%', display: 'flex' }}>
              <Menu openMenu={openMenu} />
              <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </MenuStorage>
    </UserStorage>
  );
}

export default App;
