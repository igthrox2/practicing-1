import FetchItems from "../components/fetchItems";
import Footer from "../components/footer";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
