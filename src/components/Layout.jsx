import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div>
    <header>
      <Nav />
    </header>
      <main>
        <Outlet /> {/* Dette gjør at innholdet endrer seg basert på ruten */}
      </main>
    </div>
  );
};

export default Layout;
