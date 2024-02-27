import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { AppProvider } from "./contexts/OpenMenu";

function App() {

  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="App">
      <AppProvider>
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div style={{ width: '100%', display: 'flex' }}>
          <Menu openMenu={openMenu} />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
