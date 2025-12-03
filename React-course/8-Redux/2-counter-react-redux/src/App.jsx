import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components /header";
import DisplayCounter from "./components /displayCounter";
import Container from "./components /container";
import Controls from "./components /controls";
import PrivacyMessage from "./components /privacyMsg";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector(store => store.privacy);
  
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy  ? <PrivacyMessage /> : <DisplayCounter /> }
            <Controls />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
 