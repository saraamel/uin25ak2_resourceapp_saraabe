import { Outlet } from "react-router-dom"; //importerer outlet
import Nav from "./Nav"; //importerer nav

const Layout = () => {
  return (
    <div>
      <header> 
        <Nav /> {/* nav meny */ }
      </header>
      <main>
        <Outlet /> {/* placeholder til sidene */}
      </main>
    </div>
  );
};

export default Layout; //eksporterer layout delen
